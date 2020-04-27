import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CartReducer } from './redux/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartContainerComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ cart: CartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
