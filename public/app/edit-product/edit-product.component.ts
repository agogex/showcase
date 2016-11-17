import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
var alertify = require('alertify');

@Component({
    selector: 'edit-product',
    templateUrl: 'app/edit-product/edit-product.component.html'
})

export class EditProductComponent implements OnInit {
    product: Product = new Product();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productService: ProductService
    ) { }

    ngOnInit() {
        let name: string = this.route.snapshot.params['name'];
        this.productService.getOneProduct(name).then(product => this.product = product);
    }

    onSubmit() {
        this.productService
            .editProduct(this.product)
            .then( 
                () => {
                    alertify.success(`${this.product.name} was edited`);
                    this.router.navigate(['/showcase']);
                },
                () => alertify.error(`Something was wrong :(`)
            );
    }

}