const router = require('express').Router();
const path = require('path');
const { getJsonFromFile } = require('../read-file')

const getAllUsers = (req, res) => {
  return getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((data) => {
      if (!data) {
        res
          .status(500)
          .send('error')
        return;
      }
      res
        .status(200)
        .send(data)
    })
}

const getUserById = (req, res) => {
  return getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then(data => {
      if (!data) {
        res
          .status(500)
          .send('error')
        return;
      }
      const foundUser = data.find(u => u._id === req.params.id)

      if (!foundUser) {
        res
          .status(404)
          .send({ "message": "Нет пользователя с таким id" })
        return;
      }
      res
        .status(200)
        .send(foundUser)

    })
}

router.use('/users/:id', getUserById)
router.use('/users', getAllUsers)

module.exports = {
  router: router
}
