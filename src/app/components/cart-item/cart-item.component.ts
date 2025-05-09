import { Component, Input, inject } from '@angular/core';
import type { CartItem } from 'src/app/models/CartItem';
import { CartStore } from 'src/app/redux/cart.reducer';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  standalone:true,
})
export class CartItemComponent {
  @Input({ required: true }) cartItem!: CartItem;
  readonly cartStore = inject(CartStore);
}
