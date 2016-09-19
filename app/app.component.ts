import { Component } from '@angular/core';

import { ProductService } from './product.service';

@Component({
    selector: 'my-app',
    template: `
        <top-menu [productQuantity]="getQuantity()"></top-menu>
        <h1 [style.color]="setColor()">Showcase</h1>
        <product></product>
    `,
    providers: [ProductService]
})

export class AppComponent {
    constructor(private productService: ProductService) { }
    setColor(): string {
        console.log('setColor invoke!');
        return "red"
    }
    getQuantity(): number {
        console.log('getQuantity invoke!');
        return this.productService.getProductsQuantity();
    }
}