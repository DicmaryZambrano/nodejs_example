const express = require('express');
const app = express();
const port = 3000;
const homeRoute = require('./routes/homeRoute');

app.use('/', homeRoute)

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});