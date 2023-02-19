### for MacOS
from time import sleep
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import pandas as pd
import requests
import csv

# chromedriver 위치에서 코드작업 필수 
chrome_options = Options()
driver = webdriver.Chrome('/usr/local/bin/chromedriver')
driver.implicitly_wait(3)

#URL = 'https://search.shopping.naver.com/catalog/33197507754?query=나이키%20운동화&NaPm=ct%3Dldkiqfe8%7Cci%3D3819b8cb60aa247844c3b3af97e1b4eed19f02f6%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D01f86d0c248a57be434269faac9a072361b7cc57'
#URL = 'https://search.shopping.naver.com/catalog/34749106677?query=나이키%20에어포스%201&NaPm=ct%3Dldsdge14%7Cci%3D91e7da3fa9ad2d4508a1499e9d34ef9d8bdae890%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D1ed43f75f2103311ceb92c7fe49c39bc52f06267'
#URL = 'https://search.shopping.naver.com/catalog/24211060444?&NaPm=ct%3Dldsevza8%7Cci%3Dccfa19340462b9fd7ade046b40d2e8eb41d5f3c6%7Ctr%3Dslcc%7Csn%3D95694%7Chk%3D278e27352696bc8849fb8b7ea13186286d41d9fb'
URL = 'https://search.shopping.naver.com/catalog/35876425495?query=%EC%BD%94%ED%8A%B8&NaPm=ct%3Dldsfmx6w%7Cci%3Db365402b46fd059f05ddfde43898fab70f98460e%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D86a4e6def6064c0b4e1288b99e4883e2e12a8386'
driver.get(URL)
req = requests.get(URL)
html = req.text 
soup = BeautifulSoup(html, "html.parser")

list_star = []
list_review = []
list_mall = []

cnt=1   #리뷰index
page=1

f = open('dataset_coat.csv', 'w', encoding='utf-8',newline='')
wr = csv.writer(f)

def open_review(cnt):
    return "/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/ul/li[" + str(cnt) + "]/div[3]/a"
    #/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/ul/li[1]
def star(cnt):
    return "html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/ul/li[" + str(cnt) + "]/div[1]/span[1]"

def mall(cnt):
    return "html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/ul/li[" + str(cnt) + "]/div[1]/span[2]"

def review(cnt):
    return "/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/ul/li[" + str(cnt) + "]/div[2]/div/p"

driver.find_element(By.XPATH,"/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/ul/li[2]/a/strong").click()
#/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[1]/ul/li[2]/a/strong
while True:
    print ("페이지", page) 
    while True: #한페이지에 20개의 리뷰, 마지막 리뷰에서 error발생
        try:
            print("count: ", cnt , "\n")
            sleep(0.1)
            driver.find_element(By.XPATH,open_review((cnt-1)%20+1)).click()
            #list_star.append( driver.find_element(By.XPATH,star((cnt-1)%20+1)) )
            
            #list_review.append(driver.find_element(By.XPATH,review((cnt-1)%20+1)))
            print(driver.find_element(By.XPATH,review((cnt-1)%20+1)).text)
            #list_mall.append(driver.find_element(By.XPATH,review((cnt-1)%20+1)))
            wr.writerow([cnt,driver.find_element(By.XPATH,star((cnt-1)%20+1)).text,driver.find_element(By.XPATH,review((cnt-1)%20+1)).text,driver.find_element(By.XPATH,review((cnt-1)%20+1)).text])
            cnt +=1
            if cnt%20 == 0 : break
        except: break
    
    if page<11:#page10까지 적용
        try: #리뷰의 마지막 페이지에서 error발생
            next_page=driver.find_element(By.XPATH,"/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/div[3]/a["+str(page + 1)+"]").click()                                                            
            page +=1
        except: break #리뷰의 마지막 페이지에서 process 종료 
            
    else :
        try: #page11부터
            if page%10==0:
                next_page=driver.find_element(By.XPATH,'/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/div[3]/a[12]').click()
            else:
                next_page=driver.find_element(By.XPATH,'/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/div[3]/a['+str(page%10+2)+']').click()
            page+=1 #/html/body/div/div/div[2]/div[2]/div[2]/div[3]/div[4]/div[3]
        except: break 

    sleep(1)
    
driver.close()
f.close()
df = pd.DataFrame(
    {
        '별점': list_star,
        '리뷰': list_review,
    }
)

print(df)