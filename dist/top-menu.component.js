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
var product_service_1 = require('./product.service');
var TopMenu = (function () {
    function TopMenu(productService) {
        var _this = this;
        this.productService = productService;
        this.subscription = productService.changeCart$.subscribe(function (quantity) { return _this.productQuantity = quantity; });
    }
    TopMenu.prototype.ngOnInit = function () {
        this.productQuantity = this.productService.getProductsQuantity();
    };
    TopMenu.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TopMenu = __decorate([
        core_1.Component({
            selector: 'top-menu',
            templateUrl: 'app/top-menu.component.html',
            styles: ["\n        .menu {\n            margin-bottom: 20px !important;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], TopMenu);
    return TopMenu;
}());
exports.TopMenu = TopMenu;
//# sourceMappingURL=top-menu.component.js.map