import { Component, inject } from '@angular/core';
import { CartStore } from 'src/app/redux/cart.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
})
export class NavbarComponent {
  readonly #cartStore = inject(CartStore);
  get amount() {
    return this.#cartStore.totalAndAmountObject().amount;
  }
}
