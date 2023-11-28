import { Component, Input, inject } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartStore } from 'src/app/redux/cart.reducer';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  standalone:true,
})
export class CartItemComponent {
  @Input() cartItem: CartItem;
  readonly cartStore = inject(CartStore);
  }
