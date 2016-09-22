import { Component, OnInit } from '@angular/core';

import { Product } from './models';
import { ProductService } from'./product.service';

@Component({
    selector: 'cart',
    templateUrl: 'app/cart.component.html'
})

export class CartComponent implements OnInit{
    products: Product[];

    constructor(private productService: ProductService){}

    ngOnInit(): void {
        this.productService.getProductsFromCart().then(products => this.products = products);
    }
}