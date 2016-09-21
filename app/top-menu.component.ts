import { Component, Input } from '@angular/core';

@Component({
    selector: 'top-menu',
    templateUrl: 'app/top-menu.component.html',
    styles: [ `
        .menu {
            margin-bottom: 20px !important;
        }
    ` ]
})

export class TopMenu {
    @Input() productQuantity: number;
}