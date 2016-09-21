import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { ProductComponent} from './product.component';
import { ColorPicComponent} from './color-pic.component';
import { TopMenu } from './top-menu.component';
import { CartComponent } from './cart.component';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        ProductComponent,
        ColorPicComponent,
        TopMenu,
        CartComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }