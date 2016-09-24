import { Component, OnInit } from '@angular/core';

import { Product, CartItem } from './models';
import { ProductService } from './product.service';

@Component({
    selector: 'product',
    templateUrl: 'app/product.component.html'
})

export class ProductComponent implements OnInit {
    products: Product[]
    constructor(private productService: ProductService) { }

    addToCart(product: Product): void {
        this.productService.addProductsToCart(product);
    }

    ngOnInit(): void {
        this.productService.getProducts().then(products => this.products = products);
    }
}