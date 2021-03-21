beforeEach(() => {
  jest.resetModules();
});

test('Write html to file', async () => {
  jest.mock('fs/promises', () => ({
    writeFile: jest.fn().mockResolvedValue(),
  }));

  const { writeFile } = require('fs/promises');
  const FileStorageService = require('../FileStorageService');
  const storage = new FileStorageService();
  await storage.write('path', '<html>');

  expect(writeFile).toHaveBeenCalledTimes(1);
});

test('Bad arguments', () => {
  const FileStorageService = require('../FileStorageService');
  const storage = new FileStorageService();

  expect(() => storage.write('', '<html>')).toThrow();
  expect(() => storage.write(null, '<html>')).toThrow();
  expect(() => storage.write('https://', '<html>')).toThrow();
});
