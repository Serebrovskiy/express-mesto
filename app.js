const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
  req.user = {
    _id: '5f68ad71daafb02e586a69e3',
  };
  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use('/', (req, res) => {
  res
    .status(404)
    .send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
