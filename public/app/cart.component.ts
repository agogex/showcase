import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from './models';
import { ProductService } from'./product.service';
var alertify = require('alertify');

@Component({
    selector: 'cart',
    templateUrl: 'app/cart.component.html',
    styles: [`.remove { cursor: pointer; }`]
})

export class CartComponent implements OnInit{
    productQuantity: number;
    products: Product[];
    subscription: Subscription;

    removeFromCart(product: Product){
        this.productService.removeProductsFromCart(product);
        this.productService.changingCart(this.productService.getProductsQuantity());
        this.productService.getProductsFromCart().then(products =>  this.products = products);
        alertify.success(`${product.name} was removed from Cart`);
    }

    constructor(private productService: ProductService){
        this.subscription = productService.changeCart$.subscribe(quantity => this.productQuantity = quantity);
    }

    ngOnInit(): void {
        this.productService.getProductsFromCart().then(products =>  this.products = products);
        this.productQuantity = this.productService.getProductsQuantity();
    }

    ngOnDestroy():void {
        this.subscription.unsubscribe();
    }
}