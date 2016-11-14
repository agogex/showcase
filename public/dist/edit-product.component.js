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
var product_service_1 = require('./product.service');
var models_1 = require('./models');
var alertify = require('alertify');
var EditProductComponent = (function () {
    function EditProductComponent(router, route, productService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.product = new models_1.Product();
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.route.snapshot.params['name'];
        console.log("name: " + name);
        this.productService.getOneProduct(name).then(function (product) { return _this.product = product; });
    };
    EditProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.productService
            .editProduct(this.product)
            .then(function () {
            alertify.success(_this.product.name + " was edited");
            _this.router.navigate(['/showcase']);
        });
    };
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'edit-product',
            templateUrl: 'app/edit-product.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, product_service_1.ProductService])
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=edit-product.component.js.map