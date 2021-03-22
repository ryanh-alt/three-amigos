const { get } = require('axios');

class WebScraper {
  getHtml(url) {
    if (!url.toLowerCase().startsWith('http')) {
      url = 'https://' + url;
    }
    return get(url).then((res) => res.data);
  }
}

module.exports = WebScraper;
