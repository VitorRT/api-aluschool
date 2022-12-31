const { Router } = require('express');
const controller = require('../controllers/TurmaController');

const router = Router();
const end = '/turmas';
const endid = `${end}/:id`;

module.exports = router
.get(end, controller.getAllTurmas)
.get(endid, controller.getIdTurmas)
.post(end, controller.registerTurmas)
.put(endid, controller.editTurmas)
.delete(endid, controller.deleteTurmas)
.post(`${endid}/restaura`, controller.restoreTurmas)
;