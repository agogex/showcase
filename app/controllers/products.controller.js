const Product = require('../models/product');

module.exports = {
    seedProducts: seedProducts,
    getProducts: getProducts,
    createProduct: createProduct,
    getOneProduct: getOneProduct
}

function seedProducts(req, res) {
    const products = [{
        name: 'Product 1',
        colors: [
            'orange',
            'teal',
            'olive'
        ],
        price: 20.9,
        image: 'img/image.png',
        description: 'description',
        selectedColor: null,
        quantity: 1
    }, {
        name: 'Product 2',
        colors: [
            'yellow',
            'blue'
        ],
        price: 19.9,
        image: 'img/image.png',
        description: 'description',
        selectedColor: null,
        quantity: 1
    }, {
        name: 'Product 3',
        colors: [
            'blue',
            'yellow'
        ],
        price: 9.9,
        image: 'img/image.png',
        description: 'description',
        selectedColor: null,
        quantity: 1
    }, {
        name: 'Product 4',
        colors: [
            'violet',
            'purple'
        ],
        price: 9.9,
        image: 'img/image.png',
        description: 'description',
        selectedColor: null,
        quantity: 1
    }, {
        name: 'Product 5',
        colors: [
            'violet',
            'purple'
        ],
        price: 9.19,
        image: 'img/image.png',
        description: 'description',
        selectedColor: null,
        quantity: 1
    }];

    for (let product of products) {
        let newProduct = new Product(product);
        newProduct.save();
    }

    res.send('Database seeded!');
}

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) {
            res.status(404);
            res.send('Products not found');
        }

        res.json(products);
    });
}

function getOneProduct(req, res) {
    console.log(req.params.name);
    Product.findOne({
        name: req.params.name
    }, (err, product) => {
        console.log(`err: ${err}`);
        console.log(`product: ${product}`);
        if (err) {
            res.status(400).json(err);
        }
        res.json(product);
    });
}

function createProduct(req, res) {

    console.log(req.body);

    let colors = req.body.colors.split(',');

    let newProduct = new Product({
        name: req.body.name,
        colors: colors,
        price: req.body.price,
        image: 'img/image.png',
        description: req.body.description,
        selectedColor: null,
        quantity: 1
    });
    newProduct.save();
    res.status(201);
    res.send('New product was created!');
}