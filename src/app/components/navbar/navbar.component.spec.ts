import { signal } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CartStore } from 'src/app/redux/cart.reducer';
import { NavbarComponent } from './navbar.component';

class MockCartStore {
  totalAndAmountObject = signal({
    total: 0,
    amount: 2
  });
}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [{ provide: CartStore, useClass: MockCartStore }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cart amount', () => {
    const amountElement = fixture.nativeElement.querySelector('.total-amount');
    expect(amountElement.textContent).toContain('2');
  });

  it('should display correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('h3');
    expect(titleElement.textContent).toContain('Angular Shop');
  });
});
