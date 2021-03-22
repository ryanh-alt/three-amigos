require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;
require('./routes')(app);

// log all requests to the console in development
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

let server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = server;
