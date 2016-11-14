const express = require('express'),
	router = express.Router(),
	products = require('./controllers/products.controller');

module.exports = router;

// router.get('/products/seed', products.seedProducts);
router.get('/products', products.getProducts);
router.post('/product', products.createProduct);
router.get('/product/:name', products.getOneProduct);
router.post('/product/edit', products.editProduct);