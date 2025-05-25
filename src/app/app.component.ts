import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartStore } from './redux/cart.reducer';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    CartContainerComponent,
    FooterComponent,
  ],
  providers: [CartStore],
})
export class AppComponent {
  readonly cartStore = inject(CartStore);
  private readonly authService = inject(AuthService);
  public user$: Observable<User | null> = this.authService.getUser();

  login() {
    this.authService.loginWithGoogle().catch(error => {
      console.error("Login failed:", error);
    });
  }
}
