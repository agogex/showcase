import { Component, OnInit } from '@angular/core';

import { Product, CartItem } from './models';
import { ProductService } from './product.service';

@Component({
    selector: 'product',
    templateUrl: 'app/product.component.html',
    styleUrls: ['app/product.component.css']
})

export class ProductComponent implements OnInit {
    products: Product[]
    constructor(private productService: ProductService) { }

    addToCart(product: Product, error: any): void {
        if(product.selectedColor) {
            this.productService.addProductsToCart(product);
        } else {
            error = true;
        }
    }

    ngOnInit(): void {
        this.productService.getProducts().then(products => this.products = products);
    }
}