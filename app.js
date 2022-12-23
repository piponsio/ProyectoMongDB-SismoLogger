const express = require('express');
const routesController = require('./controllers/routes');

const app = express();
const router = express.Router();

const server = require('http').Server(app);

app.use(router);
app.use(routesController);

server.listen(3666, () => {
    console.log(`SismoLogger escuchando en puerto 3666`);
});