import { Component, Input } from '@angular/core';

@Component({
    selector: 'top-menu',
    templateUrl: 'app/top-menu.component.html'
})

export class TopMenu {
    @Input() productQuantity: number;
}