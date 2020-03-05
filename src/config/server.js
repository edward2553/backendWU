// configuracion de express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 4300);
app.use(bodyParser.urlencoded({extended:false}));

module.exports = app;