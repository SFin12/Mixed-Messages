# Mixed Messages
## Motivational Quote Generator

### Sections:

1. quote_scraper.py
2. quotes_file.json
3. index.html
4. script.js


### Quote_Scraper.py:
- Pulls quotes motivational quotes from "https://www.briantracy.com/
- Does some text cleaning and saves quotes to JSON file

### quotes_file.json:
- stores quotes in an array as strings.

### index.html:
- Very basic webpage to display quotes.
- Uses script.js file fo get the quotes.

### script.js:
- Does not link to the quotes_file.json
- Chooses a random quote from an array of 55 motivational quotes.

*To update quotes, run quote_scraper.py to update quotes_file.json. Copy array in quotes_file.json
and update data variable.*