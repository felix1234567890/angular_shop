import { signal } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CartStore } from 'src/app/redux/cart.reducer';
import { CartItemComponent } from './cart-item.component';

class MockCartStore {
  cartItems = signal([]);
  removeItem = jasmine.createSpy('removeItem');
  increaseAmount = jasmine.createSpy('increaseAmount');
  decreaseAmount = jasmine.createSpy('decreaseAmount');
}

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let mockCartStore: MockCartStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CartItemComponent],
      providers: [{ provide: CartStore, useClass: MockCartStore }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    mockCartStore = TestBed.inject(CartStore) as unknown as MockCartStore;

    component.cartItem = {
      id: 1,
      title: 'Test Item',
      price: 100,
      img: 'test.jpg',
      amount: 1
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cart item details', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('h4').textContent).toContain('Test Item');
    expect(element.querySelector('.item-price').textContent).toContain('100');
  });

  it('should call removeItem when remove button is clicked', () => {
    const removeButton = fixture.nativeElement.querySelector('.remove-btn');
    removeButton.click();
    expect(mockCartStore.removeItem).toHaveBeenCalledWith(1);
  });

  it('should call increaseAmount when increase button is clicked', () => {
    const increaseButton = fixture.nativeElement.querySelector('.amount-btn');
    increaseButton.click();
    expect(mockCartStore.increaseAmount).toHaveBeenCalledWith(1);
  });
});
