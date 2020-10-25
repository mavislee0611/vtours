import re
from bs4 import BeautifulSoup as soup  # HTML data structure
from urllib.request import urlopen as uReq  # Web client
import csv

town = "MA-Boston"
# URl to web scrap from.
# in this example we web scrap graphics cards from Newegg.com
page_url = "https://businessfinder.masslive.com/" + town

# opens the connection and downloads html page from url
uClient = uReq(page_url)

# parses html into a soup data structure to traverse html
# as if it were a json data type.
page_soup = soup(uClient.read(), "html.parser")
uClient.close()

# finds each product from the store page
containers = page_soup.findAll("div", {"class": "group"})

stores = []
alphabet = "abcdefghijklmnopqrstuvwxyz"

checklist = ["Restaurant", "Beverage", "Apparel", "Craft", "Art", "Retail", "Clothing", "Coffee", "Food", "Fruit", "Florist", "Hotel", "Lodging", "Apparel", "Vegetable", "Footwear", "Hair"]

def checkList(item):
  for check in checklist:
    if check in item:
      return True
  return False

# string = "name, name1, name2"
# arr = string.split(", ")
# arr = [name, name1, name2]
# <a href = ; Shop ; >Shop</a>
length = 0
for i in range(26):
  for li in containers[i].find_all('li'):
    try:
      item = str(li)
      if (checkList(item)):
        ref = item.split("\"")[1]
        stores.append(ref)
    except:
      pass
with open('boston.csv', 'w', newline='') as file:
  writer = csv.writer(file)
  writer.writerow(["Shop Name", "Phone Number", "Address", "Proximity"])
  for store in stores:
    if (length > 150):
      break
    else:
      page_url = "https://businessfinder.masslive.com" + store
      uClient = uReq(page_url)
      page_soup = soup(uClient.read(), "html.parser")
      uClient.close()
      containers = page_soup.findAll("div", {"class": "resultInner"})

      for container in containers:
        try:
          info_container = container.findAll("p", {"class":"address"})
          s1 = str(info_container[0].text)
          address = str(re.sub(r'\s+', " ", s1)).strip()
          address = str(address)

          address_container = container.findAll("div", {"class": "detailsSub"})
          s2 = str(address_container[0].text).strip()
          s2 = s2.split("\n")
          phone = str(re.sub(r'(Phone: )', "", s2[0])).strip()
          proximity = str(re.sub(r'(mi)', "", s2[1])).strip()

          title_container = container.a
          s3 = str(title_container).split(">")[1]
          title = s3.split("</a")[0].strip()

          arr = [title, phone, address, proximity]
          writer.writerow(arr)
          length = length + 1
        except:
          pass

