const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// GET /api/pedidos
router.get('/', pedidosController.getAllPedidos);

// GET /api/pedidos/:id
router.get('/:id', pedidosController.getPedidosById);

// POST /api/pedidos
router.post('/', pedidosController.createPedidos);

// PUT /api/pedidos/:id
router.put('/:id', pedidosController.updatePedidos);

// DELETE /api/pedidos/:id
router.delete('/:id', pedidosController.deletePedidos);

module.exports = router;