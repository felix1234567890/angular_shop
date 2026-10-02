import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CartStore } from 'src/app/redux/cart.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class NavbarComponent {
  readonly #cartStore = inject(CartStore);
  get amount() {
    return this.#cartStore.totalAndAmountObject().amount;
  }
}
