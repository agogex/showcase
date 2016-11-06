import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './models';

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
        this.productService.createNewProduct(this.product);
        console.log(this.product);
     }
}