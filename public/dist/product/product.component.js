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
var router_1 = require('@angular/router');
var product_service_1 = require('../services/product.service');
var alertify = require('alertify');
var ProductComponent = (function () {
    function ProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductComponent.prototype.addToCart = function (product, event) {
        event.stopPropagation();
        this.productService.addProductsToCart(product);
        this.productService.changingCart(this.productService.getProductsQuantity());
        alertify.success(product.name + " was added to Cart");
    };
    // ngOnInit(): void {
    //     this.productService.getProducts().then(products => this.products = products);
    // }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) { return _this.products = products; });
    };
    ProductComponent.prototype.editProduct = function (product) {
        this.router.navigate(['/product-edit', product.name]);
        console.log(product);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product',
            templateUrl: 'app/product/product.component.html',
            styles: ["\n        .extra {\n            text-align: center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map