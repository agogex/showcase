import { Component, OnInit, Input } from '@angular/core';

import { Product } from './models';
import { ProductService } from'./product.service';

@Component({
    selector: 'cart',
    templateUrl: 'app/cart.component.html'
})

export class CartComponent implements OnInit{
    @Input() productQuantity: number;
    products: Product[];

    constructor(private productService: ProductService){}

    ngOnInit(): void {
        this.productService.getProductsFromCart().then(products =>  {this.products = products; console.log(this.products.length);});
        
    }
}