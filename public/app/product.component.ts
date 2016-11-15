import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './product.service';
import { Product, CartItem } from './models';
var alertify = require('alertify');

@Component({
    selector: 'product',
    templateUrl: 'app/product.component.html',
    styles: [`
        .extra {
            text-align: center;
        }
    `]
})

export class ProductComponent implements OnInit {
    products: Product[]
    constructor(
        private productService: ProductService,
        private router: Router
    ) { }

    addToCart(product: Product, event): void {
        event.stopPropagation();
        this.productService.addProductsToCart(product);
        this.productService.changingCart(this.productService.getProductsQuantity());
        alertify.success(`${product.name} was added to Cart`);
    }

    // ngOnInit(): void {
    //     this.productService.getProducts().then(products => this.products = products);
    // }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(products => this.products = products);
    }

    editProduct(product) {
        this.router.navigate(['/product-edit', product.name]);
        console.log(product);
    }
}