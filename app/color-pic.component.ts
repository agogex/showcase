import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-pic',
    templateUrl: 'app/color-pic.component.html'
})

export class ColorPicComponent {
    @Input() colors: string[];

    @Output() colorSelected = new EventEmitter();

    selectedColor: string;
    selectColor(color: string): string {
        this.selectedColor = color;
        this.colorSelected.emit(this.selectedColor);
        return this.selectedColor;
    }
}