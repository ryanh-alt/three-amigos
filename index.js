require('dotenv').config();
const app = require('express')();
const port = process.env.PORT || 3000;
require('./routes')(app);

let server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = server;
