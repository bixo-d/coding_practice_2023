import requests
from bs4 import BeautifulSoup
# Make a request
page = requests.get(
    "https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')

# Create top_items as empty list
all_links = []

# Extract and store in all_links according to instructions on the left
attributes = soup.select('a')
for attribute in attributes:
    href = attribute.get('href').strip()
    text = attribute.text.strip()

    if href == None:
        continue

    all_links.append({"href": href, "text": text})

print(all_links)
# Dictionary format
#info = {
#   "href": "<link here>",
#   "text": "<link text here>"
#}