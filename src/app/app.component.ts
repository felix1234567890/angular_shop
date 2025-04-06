import { Component, inject } from '@angular/core';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartStore } from './redux/cart.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    CartContainerComponent,
  ],
  providers: [CartStore],
})
export class AppComponent {
  readonly cartStore = inject(CartStore);
}
