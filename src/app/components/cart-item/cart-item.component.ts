import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Store } from '@ngrx/store';
import { IStore } from 'src/app/redux/cart.reducer';
import {
  RemoveItemFromCart,
  IncreaseItemAmount,
  DecreaseItemAmount,
} from 'src/app/redux/cart.action';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  standalone:true
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
  constructor(private store: Store<{ cart: IStore }>) {}
  removeItem(id: number): void {
    this.store.dispatch(new RemoveItemFromCart(id));
  }
  increaseAmount(id: number): void {
    this.store.dispatch(new IncreaseItemAmount(id));
  }
  decreaseAmount(id: number, amount: number): void {
    this.store.dispatch(new DecreaseItemAmount({ id, amount }));
  }
}
