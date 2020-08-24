import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartsListComponent } from './parts/components/parts-list/parts-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { CartModule } from './cart/cart.module';
import { PartsModule } from './parts/parts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CartModule,
    PartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
