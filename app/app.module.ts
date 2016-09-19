import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { ProductComponent} from './product.component';
import { ColorPicComponent} from './color-pic.component';
import { TopMenu } from './top-menu.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ProductComponent,
        ColorPicComponent,
        TopMenu
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }