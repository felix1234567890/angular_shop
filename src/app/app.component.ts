import { Component, inject } from '@angular/core';
import { CartStore } from './redux/cart.reducer';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    CartContainerComponent,
    BrowserModule,
    HttpClientModule,
  ],
  providers:[CartStore],
})
export class AppComponent {
  readonly cartStore = inject(CartStore);
}
