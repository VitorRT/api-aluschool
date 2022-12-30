const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);

const port = process.env.PORT || 3000;
const hostname = 'localhost'
const server_url = `http://${hostname}:${port}`;

app.listen(port, () => {
    console.log(`Servidor rodando em [ ${server_url} ]`)
});

module.exports = app;