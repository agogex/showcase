import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

import { Product } from './models';
import { PRODUCTS } from './products';

@Injectable()

export class ProductService {
    private changeCartSource = new Subject<number>();
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    changeCart$ = this.changeCartSource.asObservable();

    constructor(private http: Http) { }

    changingCart(quantity: number) {
        this.changeCartSource.next(quantity);
    }

    getProducts(): Promise<Product[]> {
        return this.http.get('products').toPromise().then(res => res.json() as Product[]).catch(this.handleError);
    }

    getOneProduct(name): Promise<Product> {
        return this.http.get(`product\\${name}`).toPromise().then(res => res.json() as Product).catch(this.handleError);
    }

    createNewProduct(product: Product): Promise<any> {
        return this.http.post('product', product).toPromise().catch(this.handleError);
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
        return quantity;
    }
}