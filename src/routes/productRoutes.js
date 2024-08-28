// src/routes/productRoutes.js
const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware'); // Middleware para upload
const router = express.Router();

// Rotas para produtos com proteção de autenticação
router.post('/', authMiddleware, productController.createProduct);
router.post('/upload/:id', authMiddleware, upload.single('image'), productController.uploadProductImage); // Nova rota para upload de imagem
router.get('/', authMiddleware, productController.getAllProducts);
router.get('/:id', authMiddleware, productController.getProductById);
router.put('/:id', authMiddleware, productController.updateProduct);
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
