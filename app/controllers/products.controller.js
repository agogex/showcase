const Product = require('../models/product');

module.exports = {
    seedProducts: seedProducts,
    showProducts: showProducts
}

function seedProducts(req, res) {
    const products = [
        {
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
        }
    ];

    for (let product of products) {
        let newProduct = new Product(product);
        newProduct.save();
    }

    res.send('Database seeded!');
}

function showProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) {
            res.status(404);
            res.send('Products not found');
        }

        res.json(products);
    });
}