import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';
import { CartItem } from './models/CartItem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  constructor(private store: Store<{ cart: IStore }>) {
    this.cartSubscription = store
      .pipe(select('cart'))
      .subscribe((values) => (this.cart = values.cartItems));
    store.dispatch(new GetTotalAndAmount());
  }
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
