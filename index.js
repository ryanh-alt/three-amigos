const WebScraper = require('./WebScraper');
const FileStorageService = require('./FileStorageService');

let scraper = new WebScraper();
let storage = new FileStorageService();

// could be read in from file or passed as arguments alternatively
let urls = [
  'https://yahoo.com',
  'https://youtube.com',
  'https://github.com/ryan-harris/portfolio-builder',
];
urls.forEach((url) =>
  scraper
    .getHtml(url)
    .then((html) => storage.write(url, html))
    .then(() => console.log('File saved successfully.'))
    .catch((err) => console.error('Something went wrong.', err))
);
