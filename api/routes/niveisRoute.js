const { Router } = require('express');
const controller = require('../controllers/NiveisController');

const router = Router();
const end = '/niveis';
const endid = `${end}/:id`;

module.exports = router
.get(end, controller.getAllNiveis)
.get(endid, controller.getIdNiveis)
.post(end, controller.registerNivel)
.put(endid, controller.editNivel)
.delete(endid, controller.deleteNivel)
.post(`${endid}/restaura`, controller.restoreNivel)
;