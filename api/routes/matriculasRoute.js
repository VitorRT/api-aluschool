const { Router } = require('express');
const controller = require('../controllers/MatriculasController');

const router = Router();
const end = '/matriculas';
const endid = `${end}/:id`;

module.exports = router
.get(end, controller.getAllMatriculas)
.get(endid, controller.getIdMatriculas)
.post(end, controller.registerMatriculas)
.put(endid, controller.editMatricula)
.delete(endid, controller.deleteMatricula)
;