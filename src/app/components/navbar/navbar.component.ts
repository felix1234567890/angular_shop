import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStore } from 'src/app/redux/cart.reducer';
import { AuthService } from '../../../services/auth.service';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class NavbarComponent {
  readonly #cartStore = inject(CartStore);
  private readonly authService = inject(AuthService);
  public user$: Observable<User | null> = this.authService.getUser();

  get amount() {
    return this.#cartStore.totalAndAmountObject().amount;
  }

  logout() {
    this.authService.logout().catch(error => {
      console.error("Logout failed:", error);
    });
  }
}
