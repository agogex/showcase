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
var alertify = require('alertify');
var CartComponent = (function () {
    function CartComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.subscription = productService.changeCart$.subscribe(function (quantity) { return _this.productQuantity = quantity; });
    }
    CartComponent.prototype.removeFromCart = function (product) {
        var _this = this;
        this.productService.removeProductsFromCart(product);
        this.productService.changingCart(this.productService.getProductsQuantity());
        this.productService.getProductsFromCart().then(function (products) { return _this.products = products; });
        alertify.success(product.name + " was removed from Cart");
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductsFromCart().then(function (products) { return _this.products = products; });
        this.productQuantity = this.productService.getProductsQuantity();
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            templateUrl: 'app/cart.component.html',
            styles: [".remove { cursor: pointer; }"]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map