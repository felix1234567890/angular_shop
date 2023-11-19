import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IStore, totalAndAmountObject } from 'src/app/redux/cart.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnDestroy {
  amount: number;
  cartSubscription: Subscription;

  constructor(private readonly store: Store<{ cart: IStore }>) {
    this.cartSubscription = this.store
      .pipe(select(totalAndAmountObject))
      .subscribe((value) => (this.amount = value.amount));
  }
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
