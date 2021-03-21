const { writeFile } = require('fs/promises');

class FileStorageService {
  write(url, html) {
    let path = url?.replace(/(^\w+:|^)\/\//, '').replace(/\//g, '.');
    if (!path) {
      throw 'Invalid arguments.';
    }

    return writeFile(path + '.html', html);
  }
}

module.exports = FileStorageService;
