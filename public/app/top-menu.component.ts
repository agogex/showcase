import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'top-menu',
    templateUrl: 'app/top-menu.component.html',
    styles: [`
        .menu {
            margin-bottom: 20px !important;
        }
    ` ]
})

export class TopMenu implements OnInit, OnDestroy {
    // @Input() productQuantity: number;
    productQuantity: number;
    subscription: Subscription;

    constructor(private productService: ProductService) {
        this.subscription = productService.changeCart$.subscribe(quantity => this.productQuantity = quantity);
    }

    ngOnInit(): void {
        this.productQuantity = this.productService.getProductsQuantity();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}