#Python version 3.8

import urllib.request
from bs4 import BeautifulSoup
import json

class Scraper:
    def __init__ (self, site):
        self.site = site

    def scrape(self):
        r = urllib.request.urlopen(self.site)
        html = r.read()
        parser = "html.parser"
        sp = BeautifulSoup(html, parser)
        quotes = []
        for tag in sp.find_all("h3"):
            quote = tag.getText()
            
            if quote is None:
                continue
            else:
                quotes.append(quote)
        return quotes

quotes = "https://www.briantracy.com/blog/personal-success/26-motivational-quotes-for-success/"
first_scrapper = Scraper(quotes)
quotes_list = first_scrapper.scrape()
remove_char = ['"', ')', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
cleaned_quotes = []
for q in quotes_list:
    for char in remove_char:
        q = q.replace(char, "")
    quotation = q[1]
    q = q.replace(quotation,"")
    q = q.encode("ascii", "ignore")
    q = q.decode()
    q = q.replace("  "," -- ")
    cleaned_quotes.append(q)

cleaned_quotes = cleaned_quotes[:-2]
    
with open('quotes_file.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(cleaned_quotes, ensure_ascii=False, indent=4))