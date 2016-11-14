import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//App's Components
import { ProductComponent } from './product.component';
import { CartComponent } from './cart.component';
import { ProductFormComponent } from './product-form.component';
import { EditProductComponent } from './edit-product.component';

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
    }, {
        path: 'product-edit/:name',
        component: EditProductComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);