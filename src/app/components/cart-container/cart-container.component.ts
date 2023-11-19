import { Component, Input, OnDestroy } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Store, select } from '@ngrx/store';
import { IStore, totalAndAmountObject } from 'src/app/redux/cart.reducer';
import { Subscription } from 'rxjs';
import { EmptyCart } from 'src/app/redux/cart.action';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
})
export class CartContainerComponent implements OnDestroy {
  @Input({required:true}) cart: CartItem[];
  total: number;
  cartSubscription: Subscription;
  constructor(private store: Store<{ cart: IStore }>) {
    this.cartSubscription = store
      .pipe(select(totalAndAmountObject))
      .subscribe((values) => (this.total = values.total));
  }
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
  clearCart() {
    this.store.dispatch(new EmptyCart());
  }
  trackByFn(item: CartItem) {
    return item.id;
  }
}
