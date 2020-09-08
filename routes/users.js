const router = require('express').Router();
const path = require('path');
const getJsonFromFile = require('../read-file');

const getAllUsers = (req, res) => (
  getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
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
    })
);

const getUserById = (req, res) => (
  getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((data) => {
      if (!data) {
        res
          .status(500)
          .send({ message: 'Внутренняя ошибка сервера' });
        return;
      }
      const foundUser = data.find((u) => u._id === req.params.id);

      if (!foundUser) {
        res
          .status(404)
          .send({ message: 'Нет пользователя с таким id' });
        return;
      }

      res
        .status(200)
        .send(foundUser);
    })
);

router.get('/:id', getUserById);
router.get('/', getAllUsers);

module.exports = router;
