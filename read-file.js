const fsPromises = require('fs').promises;

const getJsonFromFile = (filePath) => fsPromises.readFile(filePath, { encoding: 'utf8' }).then((data) => JSON.parse(data)).catch({ message: 'Ошибка при чтении файла' });

module.exports = getJsonFromFile;
