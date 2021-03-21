const WebScraper = require('./WebScraper');
const scraper = new WebScraper();

module.exports = (app) => {
  app.get('/html/:url', (req, res) => {
    scraper
      .getHtml(req.params.url)
      .then((html) => res.send(html))
      .catch((err) => res.send(err));
  });

  app.get('*', (req, res) => {
    res.status(404).send('Sorry, cant find that');
  });
};
