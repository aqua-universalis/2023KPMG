import csv
from transformers import AutoTokenizer, AutoModelForSequenceClassification, TextClassificationPipeline
from kss import split_sentences
from konlpy.tag import Okt

stopwords = []

# load csv file and make [index,score,text] lists
def load_data(path):
    file = open(path,'r',encoding='utf-8')
    reader = csv.reader(file)
    ret = []
    for line in reader:
        ret.append([int(line[1][2]),line[2]])
    file.close()
    return ret

# split by sentence
def split(raw_data):
    reversal_vocab = ['는데','은데','지만','으나','한데']
    good = []
    bad = []
    for line in raw_data:
        if line[0] == 3 :
            continue
        for sentence in split_sentences(line[1]):
            flag = 0
            sentence = sentence.replace('\n',' ')
            #split by reversal words
            for word in reversal_vocab:
                if word in sentence:
                    index = sentence.find(word)
                    if index > 5:
                        if line[0] >= 4:
                            good.append(sentence[:index+2])
                        else :
                            bad.append(sentence[:index+2])
                    if len(sentence) > index+3+5:
                        if line[0] >= 4:
                            good.append(sentence[index+3:])
                        else :
                            bad.append(sentence[index+3:])
                    flag = 1
                    break
            if not flag:
                if line[0] >= 4:
                    good.append(sentence)
                else :
                    bad.append(sentence)
    
    return good,bad
    
#perform sentimental_anaysis to refine reviews
def sent_analysis(good_sentences,bad_sentences):
    #checkpoint_sent = 'pretrained_models/naver_sent'
    checkpoint_sent = "jaehyeong/koelectra-base-v3-generalized-sentiment-analysis"
    tokenizer_sent = AutoTokenizer.from_pretrained(checkpoint_sent)
    model_sent = AutoModelForSequenceClassification.from_pretrained(checkpoint_sent)
    sentiment_classifier = TextClassificationPipeline(tokenizer=tokenizer_sent, model=model_sent)
    good = []
    deleted_good = []
    for sentence in good_sentences:
        pred = sentiment_classifier(sentence)
        if pred[0]['label'] == '1' and pred[0]['score'] > 0.9 :
            good.append(sentence)
        else :
            deleted_good.append(sentence)
    bad = []
    deleted_bad = []
    for sentence in bad_sentences:
        pred = sentiment_classifier(sentence)
        if pred[0]['label'] == '0' and pred[0]['score'] > 0.9 :
            bad.append(sentence)
        else :
            deleted_bad.append(sentence)
    return good,deleted_good,bad,deleted_bad

def load_stopwords():
    stop_file = open("src/semori/vocab_stopwords.txt",'r',encoding='utf-8')
    for line in stop_file.readlines():
        stopwords.append(line.strip())
    stop_file.close()

def keyword_extraction(sentences):
    if len(stopwords) == 0 :
        load_stopwords()
    okt = Okt()

    single = {}
    double = {}
    for sentence in sentences:
        phrases = okt.phrases(sentence)
        for item in phrases:
            if ' ' in item:
                if item in double.keys():
                    double[item] += 1
                else :
                    double[item] = 1
            else :
                if item in single.keys():
                    single[item] += 1
                else :
                    single[item] = 1
    single = sorted(single.items(),key=lambda x:x[1],reverse=True)
    ret_single = {}
    for key,value in single:
        value = value / len(sentences) * 100
        ret_single[key] = round(value,2)
    
    double =  sorted(double.items(),key=lambda x:x[1],reverse=True)
    ret_double = {}
    for key,value in double:
        value = value / len(sentences) * 100
        ret_double[key] = round(value,2)
    
    return ret_single,ret_double     
    

if __name__ == "__main__":
    target = 'coat1'
    reviews_raw = load_data("datasets/semori/semori_"+target+".csv")
    splitted_good, splitted_bad = split(reviews_raw)
    good_reviews, deleted_from_good, bad_reviews, deleted_from_bad = sent_analysis(splitted_good,splitted_bad)
    
    keyw_good_single,keyw_good_double = keyword_extraction(good_reviews)
    keyw_bad_single,keyw_bad_double = keyword_extraction(bad_reviews)
    
    write = open("output/" + target + "v02/good_single.txt",'w',encoding='utf-8')
    for key in keyw_good_single.keys():
        write.write(f"{key} >> {keyw_good_single[key]}%\n")
    write.close()
    
    write = open("output/" + target + "v02/good_double.txt",'w',encoding='utf-8')
    for key in keyw_good_double.keys():
        write.write(f"{key} >> {keyw_good_double[key]}%\n")
    write.close()
    
    write = open("output/" + target + "v02/bad_single.txt",'w',encoding='utf-8')
    for key in keyw_bad_single.keys():
        write.write(f"{key} >> {keyw_bad_single[key]}%\n")
    write.close()
    
    write = open("output/" + target + "v02/bad_double.txt",'w',encoding='utf-8')
    for key in keyw_bad_double.keys():
        write.write(f"{key} >> {keyw_bad_double[key]}%\n")
    write.close()
    