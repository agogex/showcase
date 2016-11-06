const express = require('express'),
	router = express.Router(),
	products = require('./controllers/products.controller');

module.exports = router;

// router.get('/products/seed', products.seedProducts);
router.get('/products', products.showProducts);