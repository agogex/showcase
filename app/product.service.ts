import { Injectable } from '@angular/core';

import { Product } from './models';
import { PRODUCTS } from './products';

@Injectable()

export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }

    addProductsToCart(product: Product): void {
        let products: Product[] = JSON.parse(localStorage.getItem('products')) || [];
        let insertNew: boolean = true;
        products.forEach((item) => {
            if (item.name === product.name && item.selectedColor === product.selectedColor) {
                item.quantity++;
                insertNew = false;
            }
        });
        if (insertNew) products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    }

    getProductsQuantity(): number {
        let products: Product[] = JSON.parse(localStorage.getItem('products')) || [];
        let quantity: number = 0;
        if (products.length === 0) {
            quantity = 0;
        } else {
            products.forEach((item) => {
                quantity += item.quantity;
            });
        }
        return quantity
    }
}