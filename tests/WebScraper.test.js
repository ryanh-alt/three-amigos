const { get } = require('axios');
const WebScraper = require('../WebScraper');

jest.mock('axios');

test('Get html from url', async () => {
  const data = '<html>';
  const url = 'https://google.com';
  const scraper = new WebScraper();
  get.mockImplementationOnce(() => Promise.resolve({ data }));
  await expect(scraper.getHtml(url)).resolves.toEqual(data);
  expect(get).toHaveBeenCalledWith(url);
});

test('Error getting html', async () => {
  const url = 'https://yahooooo.com';
  const scraper = new WebScraper();
  get.mockImplementationOnce(() => Promise.reject(new Error('Unknown error')));
  await expect(scraper.getHtml(url)).rejects.toThrow();
  expect(get).toHaveBeenCalledWith(url);
});
