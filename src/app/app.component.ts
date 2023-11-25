import { Component, WritableSignal, signal } from '@angular/core';
import { CartItem } from './models/CartItem';
import { Store, select } from '@ngrx/store';
import { IStore } from './redux/cart.reducer';
import { GetTotalAndAmount } from './redux/cart.action';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    CartContainerComponent,
    BrowserModule,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 're-shop';
  cart: WritableSignal<CartItem[]> = signal([]);

  constructor(private readonly store: Store<{ cart: IStore }>) {
    this.store
      .pipe(takeUntilDestroyed(), select('cart'))
      .subscribe((values) => this.cart.set(values.cartItems));
    this.store.dispatch(new GetTotalAndAmount());
  }
}
