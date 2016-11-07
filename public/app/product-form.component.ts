import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './models';
var alertify = require('alertify');

@Component({
    selector: 'product-form',
    templateUrl: 'app/product-form.component.html'
})

export class ProductFormComponent {
    product: Product = new Product();
    submitted: boolean = false;

    constructor(private productService: ProductService) { }

    onSubmit() {
        this.submitted = true;
        this.productService
            .createNewProduct(this.product)
            .then(() => {
                alertify.success(`${this.product.name} was created`);
            });
        console.log(this.product);
     }
}