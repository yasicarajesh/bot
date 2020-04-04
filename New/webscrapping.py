import requests
import bs4
res = requests.get('https://en.wikipedia.org/wiki/Beautiful_Soup_(HTML_parser)')
res.text 
soup = bs4.BeautifulSoup(res.text,"html.parser")
for link in soup. find_all('a',href=True):
    print(link['href'])
soup.select(".mw-headline")
for i in soup.select(".mw-headline"):
    print(i.text)

soup.select(".toctext")
for y in soup.select(".toctext"):
    print(y.text)
