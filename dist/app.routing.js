"use strict";
var router_1 = require('@angular/router');
var product_component_1 = require('./product.component');
var cart_component_1 = require('./cart.component');
var routes = [
    {
        path: '',
        redirectTo: '/showcase',
        pathMatch: 'full'
    }, {
        path: 'showcase',
        component: product_component_1.ProductComponent
    }, {
        path: 'cart',
        component: cart_component_1.CartComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map