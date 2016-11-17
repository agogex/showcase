"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ColorPicComponent = (function () {
    function ColorPicComponent() {
        this.colorSelected = new core_1.EventEmitter();
    }
    ColorPicComponent.prototype.ngOnInit = function () {
        this.selectColor(this.colors[0]);
    };
    ColorPicComponent.prototype.selectColor = function (color) {
        this.selectedColor = color;
        this.colorSelected.emit(this.selectedColor);
        return this.selectedColor;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ColorPicComponent.prototype, "colors", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ColorPicComponent.prototype, "colorSelected", void 0);
    ColorPicComponent = __decorate([
        core_1.Component({
            selector: 'color-pic',
            templateUrl: 'app/color-pic/color-pic.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ColorPicComponent);
    return ColorPicComponent;
}());
exports.ColorPicComponent = ColorPicComponent;
//# sourceMappingURL=color-pic.component.js.map