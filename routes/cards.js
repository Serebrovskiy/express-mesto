const router = require('express').Router();
const path = require('path');
const getJsonFromFile = require('../read-file');

const getAllCards = (req, res) => ({
  return: getJsonFromFile(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((data) => {
      if (!data) {
        res
          .status(500)
          .send({ message: 'Внутренняя ошибка сервера' });
        return;
      }
      res
        .status(200)
        .send(data);
    }),
});

router.get('/', getAllCards);

module.exports = router;
