// src/routes/clientRoutes.js
const express = require('express');
const clientController = require('../controllers/clientController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Rotas para clientes
router.post('/', authMiddleware, clientController.createClient);
router.get('/', authMiddleware, clientController.getAllClients);
router.get('/:id', authMiddleware, clientController.getClientById);
router.put('/:id', authMiddleware, clientController.updateClient);
router.delete('/:id', authMiddleware, clientController.deleteClient);

module.exports = router;
