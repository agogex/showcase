//Angular's Components
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//App's Components
import { AppComponent }   from './app.component';
import { ProductComponent} from './product.component';
import { ColorPicComponent} from './color-pic.component';
import { TopMenu } from './top-menu.component';
import { CartComponent } from './cart.component';
import { ProductFormComponent } from './product-form.component';
import { EditProductComponent } from './edit-product.component';

//Routing
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ProductComponent,
        ColorPicComponent,
        TopMenu,
        CartComponent,
        ProductFormComponent,
        EditProductComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }