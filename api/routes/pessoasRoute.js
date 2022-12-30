const { Router } = require('express');
const controller = require('../controllers/PessoasController');

const router = Router();
const end = '/pessoas';
const endid = `${end}/:id`;


module.exports = router
.get(end, controller.getAllPerson)
.get(endid, controller.getIdPerson)
.post(end, controller.postPerson)
.put(endid, controller.editPerson)
.delete(endid, controller.deletePerson)
;