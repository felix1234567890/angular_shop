import {
  Component,
  Input,
  WritableSignal,
  signal,
} from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Store, select } from '@ngrx/store';
import { IStore, totalAndAmountObject } from 'src/app/redux/cart.reducer';
import { EmptyCart } from 'src/app/redux/cart.action';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
})
export class CartContainerComponent {
  @Input({ required: true }) cart: CartItem[];
  total: WritableSignal<number> = signal(0);
  constructor(private store: Store<{ cart: IStore }>) {
    this.store
      .pipe(takeUntilDestroyed(), select(totalAndAmountObject))
      .subscribe((values) => this.total.set(values.total));
  }
  clearCart() {
    this.store.dispatch(new EmptyCart());
  }
  trackByFn(item: CartItem) {
    return item.id;
  }
}
