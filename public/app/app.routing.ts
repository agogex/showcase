import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { CartComponent } from './cart.component';
import { ProductFormComponent } from './product-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/showcase',
        pathMatch: 'full'
    }, {
        path: 'showcase',
        component: ProductComponent
    }, {
        path: 'cart',
        component: CartComponent
    }, {
        path: 'product-form',
        component: ProductFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);