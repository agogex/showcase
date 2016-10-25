import { Component } from '@angular/core';

import { ProductService } from './product.service';

@Component({
    selector: 'my-app',
    template: `
        <top-menu></top-menu>
        <router-outlet></router-outlet>
    `,
    providers: [ProductService]
})

export class AppComponent {
    constructor(private productService: ProductService) { }
    
    getQuantity(): number {
        return this.productService.getProductsQuantity();
    }
}