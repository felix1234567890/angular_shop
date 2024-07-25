import { TestBed } from '@angular/core/testing';
import { CartStore, ICartStore } from './cart.reducer';

describe('CartStore', () => {
  let store: ICartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartStore],
    });
    store = TestBed.inject(CartStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should initialize with correct data', () => {
    expect(store.cartItems()).toBeTruthy();
    expect(store.cartItems().length).toBe(3);
    expect(store.cartItems()[0].title).toBe('Samsung Galaxy S7');
    expect(store.cartItems()[1].title).toBe('google pixel');
    expect(store.cartItems()[2].title).toBe('Xiaomi Redmi Note 2');
  });

  it('should calculate total and amount correctly', () => {
    const result = store.totalAndAmountObject();
    expect(result.total).toBeCloseTo(1799.97, 2); // 599.99 + 499.99 + 699.99
    expect(result.amount).toBe(3);
  });

  it('should empty the cart', () => {
    store.emptyCart();
    expect(store.cartItems().length).toBe(0);
  });

  it('should remove an item from the cart', () => {
    store.removeItem(2);
    expect(store.cartItems().length).toBe(2);
    expect(store.cartItems().find((item) => item.id === 2)).toBeUndefined();
  });

  it('should increase the amount of an item', () => {
    store.increaseAmount(1);
    const updatedItem = store.cartItems().find((item) => item.id === 1);
    expect(updatedItem?.amount).toBe(2);
  });

  it('should decrease the amount of an item', () => {
    store.increaseAmount(1); // First increase to 2
    store.decreaseAmount(1, 2);
    const updatedItem = store.cartItems().find((item) => item.id === 1);
    expect(updatedItem?.amount).toBe(1);
  });

  it('should remove item when decreased to 0', () => {
    store.decreaseAmount(3, 1);
    expect(store.cartItems().length).toBe(2);
    expect(store.cartItems().find((item) => item.id === 3)).toBeUndefined();
  });
});
