import { Component, WritableSignal, signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IStore, totalAndAmountObject } from 'src/app/redux/cart.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone:true
})
export class NavbarComponent {
  amount: WritableSignal<number> = signal(0);

  constructor(private readonly store: Store<{ cart: IStore }>) {
   this.store
      .pipe(takeUntilDestroyed(), select(totalAndAmountObject))
      .subscribe((value) => this.amount.set(value.amount));
  }
}
