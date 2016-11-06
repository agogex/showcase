import { Component } from '@angular/core';

import { Product } from './models';

@Component({
    selector: 'product-form',
    templateUrl: 'app/product-form.component.html'
})

export class ProductFormComponent {
    product: Product = new Product();
    submitted: boolean = false;

    onsubmit() {
        this.submitted = true;
     }
}