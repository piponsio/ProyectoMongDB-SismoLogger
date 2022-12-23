const express = require('express');
const sismoController = require('./sismo');

const app = express();

app.use('/sismos/', sismoController);

module.exports = app;