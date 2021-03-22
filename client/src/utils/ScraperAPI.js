import axios from 'axios';

const ScraperAPI = {
  getHtml: (url) => {
    return axios.get('/html?url=' + url).then((req) => req.data);
  },
};

export default ScraperAPI;
