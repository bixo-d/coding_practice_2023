import requests
from bs4 import BeautifulSoup
import csv
# Make a request
page = requests.get(
    "https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')

all_products = []

# Product Name
# Price
# Description
# Reviews
# Product Image

products = soup.select('div.thumbnail')

for product in products:
    name = product.select('h4 > a.title')[0].text.strip()
    price = product.select('h4.price')[0].text.strip()
    description = product.select('p.description')[0].text.strip().replace('\t', '').replace('\n', ' ')
    review_label = product.select('div.ratings')[0].text.strip()
    image = product.select('img')[0].get('src')

    info = {
        "name": name,
        "price": price,
        "description": description,
        "review": review_label,
        "image": image
    }
    all_products.append(info)

    # TODO: Work
#    print("Work on product here")
#    print(name)
#    print(price)
#    print(description)
#    print(review_label)
#    print(image)


keys = all_products[0].keys()

with open('products.csv', 'w', newline='') as output_file:
    dict_writer = csv.DictWriter(output_file, keys)
    dict_writer.writeheader()
    dict_writer.writerows(all_products)