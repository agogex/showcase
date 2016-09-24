import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'color-pic',
    templateUrl: 'app/color-pic.component.html'
})

export class ColorPicComponent implements OnInit {
    @Input() colors: string[];

    @Output() colorSelected = new EventEmitter();

    selectedColor: string;

    ngOnInit (): void {
        this.selectColor(this.colors[0]);
    }

    selectColor(color: string): string {
        this.selectedColor = color;
        this.colorSelected.emit(this.selectedColor);
        return this.selectedColor;
    }
}