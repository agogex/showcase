import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


import { Product } from './models';
import { PRODUCTS } from './products';

@Injectable()

export class ProductService {
    private changeCartSource = new Subject<number>();
    changeCart$ = this.changeCartSource.asObservable();

    changingCart(quantity: number) {
        this.changeCartSource.next(quantity);
    }

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

    removeProductsFromCart(product: Product): void {
        let products: Product[] = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(item => !(item.name === product.name && item.selectedColor === product.selectedColor));
        localStorage.setItem("products", JSON.stringify(products));
    }

    getProductsFromCart(): Promise<Product[]> {
        let products: Product[] = JSON.parse(localStorage.getItem('products')) || [];
        return Promise.resolve(products);
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