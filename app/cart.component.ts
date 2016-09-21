import { Component } from '@angular/core';

@Component({
    selector: 'cart',
    template: '{{message}}'
})

export class CartComponent {
    message = 'Todo Cart';
}