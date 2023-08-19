import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from './models/CartItem';
import { Store, select } from '@ngrx/store';
import { IStore } from './redux/cart.reducer';
import { GetTotalAndAmount } from './redux/cart.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  title = 're-shop';
  cart: CartItem[];
  cartSubscription: Subscription;

  constructor(store: Store<{ cart: IStore }>) {
    this.cartSubscription = store
      .pipe(select('cart'))
      .subscribe((values) => (this.cart = values.cartItems));
    store.dispatch(new GetTotalAndAmount());
  }
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
