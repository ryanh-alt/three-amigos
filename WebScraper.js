const { get } = require('axios');

class WebScraper {
  getHtml(url) {
    return get(url).then((res) => res.data);
  }
}

module.exports = WebScraper;
