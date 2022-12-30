const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute');
const matriculas = require('./matriculasRoute');

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas,
        matriculas
    )

    app.get('/', (req, res) => {
        res.status(200).send({
            welcome: 'Boas-Vindas a minha API REST! 😎🔥 '
        })
    })
};