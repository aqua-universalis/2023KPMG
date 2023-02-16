from semori_review_analysis import reviews
import json


if __name__ == '__main__':
    
    review_data = reviews(path="datasets/semori/semori_coat1.csv")
    
    best_key,worst_key,soso_key = review_data.keyword_extraction()
    with open('json_output/best_key.json','w',encoding='utf-8') as file:
        json.dump(best_key,file,ensure_ascii=False,indent=4)
    with open('json_output/worst_key.json','w',encoding='utf-8') as file:
        json.dump(worst_key,file,ensure_ascii=False,indent=4)
    with open('json_output/soso_key.json','w',encoding='utf-8') as file:
        json.dump(soso_key,file,ensure_ascii=False,indent=4)
    
    
    searched,posneg = review_data.search_for("배송")
    data = {}
    sum = 0
    for line in searched:
        sum += line[0]
    data['incl_rate'] = len(searched)/review_data.num_reviews
    data['num_pos'] = posneg['1']
    data['num_neg'] = posneg['0']
    data['avg_score'] = sum/len(searched)

    searched_sentences = []
    position_keyword = []
    for line in searched:
        position_keyword.append(line[1][0])
        searched_sentences.append(line[1][1])
    
    data['sentences'] = searched_sentences
    data['keyword_position'] = position_keyword
    
    with open('json_output/search.json','w',encoding='utf-8') as file:
        json.dump(data,file,ensure_ascii=False,indent=4)
    
    clusters = review_data.clustering()
    data = {}
    sentences = []
    for cluster in clusters:
        if len(cluster) > 1:
            break
        sentences.append(cluster[0])
    data['sentences'] = sentences
    with open('json_output/cluster_only.json','w',encoding='utf-8') as file:
        json.dump(data,file,ensure_ascii=False,indent=4)
    
    clusters.reverse()
    data = {}
    data['cluster_size'] = []
    data['cluster_text'] = []
    for cluster in clusters[:20]:
        data['cluster_size'].append(len(cluster))
        sentences = []
        for line in cluster:
            sentences.append(line)
        data['cluster_text'].append(sentences)
    with open('json_output/cluster_top20.json','w',encoding='utf-8') as file:
        json.dump(data,file,ensure_ascii=False,indent=4)
    