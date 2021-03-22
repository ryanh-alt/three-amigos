const WebScraper = require('./WebScraper');
const scraper = new WebScraper();

module.exports = (app) => {
  app.get('/html', (req, res) => {
    scraper
      .getHtml(req.query.url)
      .then((html) => res.send(html))
      .catch((err) => res.status(400).send('Bad Request'));
  });

  app.get('*', (req, res) => {
    res.status(404).send('Sorry, cant find that');
  });
};
