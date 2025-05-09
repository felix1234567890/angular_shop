import { Component, inject } from '@angular/core';
import type { CartItem } from 'src/app/models/CartItem';
import { CurrencyPipe } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartStore } from 'src/app/redux/cart.reducer';

@Component({
  selector: 'app-cart-container',
  standalone: true,
  templateUrl: './cart-container.component.html',
  imports: [CurrencyPipe, CartItemComponent],
})
export class CartContainerComponent {
  readonly cartStore = inject(CartStore);
  trackByFn(item: CartItem) {
    return item.id;
  }
  clearCart() {
    this.cartStore.emptyCart();
  }
}
