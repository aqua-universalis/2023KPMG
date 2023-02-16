import csv
from kss import split_sentences
from transformers import AutoTokenizer, AutoModelForSequenceClassification, TextClassificationPipeline
from numpy import dot
from numpy.linalg import norm
from konlpy.tag import Okt
from sentence_transformers import SentenceTransformer


def cos_sim(a,b):
    return dot(a,b)/(norm(a)*norm(b))

class reviews:
    sent_factor = 0.8
    sim_factor = 0.7
    
    num_reviews = 0
    
    raw_review = []
    stopwords = []
    
    splitted_review = []
    refiend_review = []
    soso_reviews = []
    
    # split to shorter sentences
    def split(self):
        reversal_vocab = ['는데','은데','지만','으나','한데']
        okt = Okt()
        for review in self.raw_review:
            score = review[0]
            text = okt.normalize(review[1])
            sentences = []
            for line in split_sentences(text):
                flag = 0
                line = line.replace('\n',' ')
                for word in reversal_vocab:
                    if word in line:
                        idx = line.find(word)
                        if idx > 5:
                            sentences.append(line[:idx+2])
                        if len(line) > idx + 8:
                            sentences.append(line[idx+2:])
                        flag = 1
                if not flag and len(line) > 5:
                    sentences.append(line)
            self.splitted_review.append([score,sentences])
    
    
    # perform sentimental analysis to refine reviews
    def sent_analysis(self):
        checkpoint_sent = "jaehyeong/koelectra-base-v3-generalized-sentiment-analysis"
        tokenizer_sent = AutoTokenizer.from_pretrained(checkpoint_sent)
        model_sent = AutoModelForSequenceClassification.from_pretrained(checkpoint_sent)
        sentiment_classifier = TextClassificationPipeline(tokenizer=tokenizer_sent, model=model_sent)
        okt = Okt()
        
        for review in self.splitted_review:
            score = review[0]
            sentences = review[1]
            preds = []
            refined_sentences = []
            for sentence in sentences:
                preds.append(sentiment_classifier(sentence))
            if score >= 4:
                for index,pred in enumerate(preds):
                    if pred[0]['label'] == '1' and pred[0]['score'] > self.sent_factor:
                        refined_sentences.append(okt.normalize(sentences[index]))
                    if pred[0]['label'] == '0' and pred[0]['score'] > self.sent_factor:
                        self.soso_reviews.append(okt.normalize(sentences[index]))
            else :
                for index,pred in enumerate(preds):
                    if pred[0]['label'] == '0' and pred[0]['score'] > self.sent_factor:
                        refined_sentences.append(okt.normalize(sentences[index]))
            self.refiend_review.append([score,refined_sentences])
                
                  
    def preprocess(self):
        self.split()
        self.sent_analysis()

    
    def __init__(self,path):
        
        # read data from csv file
        file = open(path,'r',encoding='utf-8')
        rdr = csv.reader(file)
        for line in rdr:
            score = int(line[1][2])
            text = line[2].replace('이쁘',"예쁘").replace('이쁜','예쁜').replace("이뻐","예뻐")
            self.raw_review.append([score,text])
        file.close()
        self.num_reviews = len(self.raw_review)
        # read stopwords from txt file
        file = open("src/semori_new/stopwords.txt",'r',encoding='utf-8')
        for line in file.readlines():
            self.stopwords.append(line.strip())
        file.close()
        
        # preprocess
        self.preprocess()
        
        
    def keyword_extraction(self):
        okt = Okt()
        good_sentences = []
        bad_sentences = []

        for review in self.refiend_review:
            if review[0] >= 4:
                for sentence in review[1]:
                    good_sentences.append(sentence)
            else :
                for sentence in review[1]:
                    bad_sentences.append(sentence)

        best_key = {}
        worst_key = {}
        soso_key = {}
        
        for sentence in good_sentences:
            pos = okt.pos(sentence,stem=True)
            items_in_sentence = []
            for item,tag in pos:
                if tag in ['Noun','Verb','Adjective'] and (not item in self.stopwords) and (not item in items_in_sentence):
                    items_in_sentence.append(item)
                    if item in best_key.keys():
                        best_key[item] += 1
                    else :
                        best_key[item] = 1
  
        for sentence in bad_sentences:
            pos = okt.pos(sentence,stem=True)
            items_in_sentence = []
            for item,tag in pos:
                if tag in ['Noun','Verb','Adjective'] and (not item in self.stopwords) and (not item in items_in_sentence):
                    items_in_sentence.append(item)
                    if item in worst_key.keys():
                        worst_key[item] += 1
                    else :
                        worst_key[item] = 1
                        
        for sentence in self.soso_reviews:
            pos = okt.pos(sentence,stem=True)
            items_in_sentence = []
            for item,tag in pos:
                if tag in ['Noun','Verb','Adjective'] and (not item in self.stopwords) and (not item in items_in_sentence):
                    items_in_sentence.append(item)
                    if item in soso_key.keys():
                        soso_key[item] += 1
                    else :
                        soso_key[item] = 1
                        
        best = sorted(best_key.items(),key=lambda x:x[1],reverse=True)[:20]
        worst = sorted(worst_key.items(),key=lambda x:x[1],reverse=True)[:20]
        soso = sorted(soso_key.items(),key=lambda x:x[1],reverse=True)[:20]
        
        ret_best = {}
        for key,value in best:
            value = value / len(good_sentences) * 100
            ret_best[key] = round(value,2)   
        ret_worst = {}
        for key,value in worst:
            value = value / len(bad_sentences) * 100
            ret_worst[key] = round(value,2)    
        ret_soso = {}
        for key,value in soso:
            value = value / len(self.soso_reviews) * 100
            ret_soso[key] = round(value,2)
        
        return ret_best,ret_worst,ret_soso
    
    def search_for(self,keyword):
        okt = Okt()
        key,tag = okt.pos(keyword)[0]
        ret = []
        for review in self.raw_review:
            flag = 0
            words = review[1].split(' ')
            for index,word in enumerate(words):
                pos = okt.pos(word,stem=True)
                for item,tag in pos:
                    if item == key:
                        ret.append([index,review])
                        flag = 1
                        break
                if flag:
                    break
        
        key_sents = []
        for review in self.splitted_review:
            sentences = review[1]
            for sentence in sentences:
                pos = okt.morphs(sentence,stem=True)
                if key in pos:
                    key_sents.append(sentence)
        
        checkpoint_sent = "jaehyeong/koelectra-base-v3-generalized-sentiment-analysis"
        tokenizer_sent = AutoTokenizer.from_pretrained(checkpoint_sent)
        model_sent = AutoModelForSequenceClassification.from_pretrained(checkpoint_sent)
        sentiment_classifier = TextClassificationPipeline(tokenizer=tokenizer_sent, model=model_sent)
        
        posneg = {'0':0,'1':0}
        for sentence in key_sents:
            pred = sentiment_classifier(sentence)
            if pred[0]['score'] > self.sent_factor:
                posneg[pred[0]['label']] += 1
        
        return ret,posneg
    
    def clustering(self):
        model = SentenceTransformer('jhgan/ko-sroberta-multitask')
        clusters = [[0]]
        
        good_sentences = []
        for review in self.refiend_review:
            if review[0] >= 4:
                for sentence in review[1]:
                    good_sentences.append(sentence)
        
        embeddings = model.encode(good_sentences)
        for index in range(1,len(good_sentences)):
            max_sim = 0
            max_clst = 0
            for idx,cluster in enumerate(clusters):
                similarity = cos_sim(embeddings[cluster[0]],embeddings[index])
                if similarity > max_sim:
                    max_sim = similarity
                    max_clst = idx
            #print(f'{index} {max_sim}')
            if max_sim > self.sim_factor:
                clusters[max_clst].append(index)
            else :
                clusters.append([index])
        output = []
        for cluster in clusters:
            sentences = []
            for index in cluster:
                sentences.append(good_sentences[index])
            output.append(sentences)
        output.sort(key=len)
        return output
        