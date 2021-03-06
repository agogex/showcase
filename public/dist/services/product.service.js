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
var http_1 = require('@angular/http');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.apiUrl = 'api/products';
        this.changeCartSource = new Subject_1.Subject();
        this.changeCart$ = this.changeCartSource.asObservable();
    }
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProductService.prototype.changingCart = function (quantity) {
        this.changeCartSource.next(quantity);
    };
    // getProducts(): Promise<Product[]> {
    //     return this.http.get('products').toPromise().then(res => res.json() as Product[]).catch(this.handleError);
    // }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getOneProduct = function (name) {
        return this.http.get(this.apiUrl + "/" + name).toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
    };
    ProductService.prototype.createNewProduct = function (product) {
        return this.http.post(this.apiUrl, product).toPromise().catch(this.handleError);
    };
    ProductService.prototype.editProduct = function (product) {
        return this.http.put(this.apiUrl + "/" + product.name, product).toPromise().catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (name) {
        return this.http.delete(this.apiUrl + "/" + name).toPromise().catch(this.handleError);
    };
    ProductService.prototype.addProductsToCart = function (product) {
        var products = JSON.parse(localStorage.getItem('products')) || [];
        var insertNew = true;
        products.forEach(function (item) {
            if (item._id === product._id && item.selectedColor === product.selectedColor) {
                item.quantity++;
                insertNew = false;
            }
        });
        if (insertNew)
            products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    };
    ProductService.prototype.removeProductsFromCart = function (product) {
        var products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(function (item) { return !(item.name === product.name && item.selectedColor === product.selectedColor); });
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
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map