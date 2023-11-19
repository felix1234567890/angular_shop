import { Component, WritableSignal, signal } from '@angular/core';
import { CartItem } from './models/CartItem';
import { Store, select } from '@ngrx/store';
import { IStore } from './redux/cart.reducer';
import { GetTotalAndAmount } from './redux/cart.action';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 're-shop';
  cart: WritableSignal<CartItem[]> = signal([])

  constructor(private readonly store: Store<{ cart: IStore }>) {
    this.store
      .pipe(takeUntilDestroyed(), select('cart'))
      .subscribe((values) => this.cart.set(values.cartItems));
    this.store.dispatch(new GetTotalAndAmount());
  }
}
