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
var Subject_1 = require('rxjs/Subject');
var products_1 = require('./products');
var ProductService = (function () {
    function ProductService() {
        this.addToCartSource = new Subject_1.Subject();
        this.addToCart$ = this.addToCartSource.asObservable();
    }
    ProductService.prototype.addingToCart = function (quantity) {
        this.addToCartSource.next(quantity);
    };
    ProductService.prototype.getProducts = function () {
        return Promise.resolve(products_1.PRODUCTS);
    };
    ProductService.prototype.addProductsToCart = function (product) {
        var products = JSON.parse(localStorage.getItem('products')) || [];
        var insertNew = true;
        products.forEach(function (item) {
            if (item.name === product.name && item.selectedColor === product.selectedColor) {
                item.quantity++;
                insertNew = false;
            }
        });
        if (insertNew)
            products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    };
    ProductService.prototype.getProductsFromCart = function () {
        var products = JSON.parse(localStorage.getItem('products')) || [];
        return Promise.resolve(products);
    };
    ProductService.prototype.getProductsQuantity = function () {
        var products = JSON.parse(localStorage.getItem('products')) || [];
        var quantity = 0;
        if (products.length === 0) {
            quantity = 0;
        }
        else {
            products.forEach(function (item) {
                quantity += item.quantity;
            });
        }
        return quantity;
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map