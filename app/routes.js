const express = require('express'),
	router = express.Router(),
	products = require('./controllers/products.controller');

module.exports = router;

// router.get('/api/products/seed', products.seedProducts);
router.get('/api/products', products.getProducts);
router.post('/api/products', products.createProduct);
router.get('/api/products/:name', products.getOneProduct);
router.put('/api/products/:name', products.editProduct);