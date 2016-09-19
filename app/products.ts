import { Product } from './models';

export const PRODUCTS: Product[] = [
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
        } , {
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
        } , {
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