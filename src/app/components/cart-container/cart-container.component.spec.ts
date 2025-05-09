import { CurrencyPipe } from "@angular/common";
import { signal } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CartStore } from "src/app/redux/cart.reducer";
import { CartContainerComponent } from "./cart-container.component";
// Removed unused import/type 'ICartStore' to fix lint error
class MockCartStore {
 cartItems = signal([])
 totalAndAmountObject = signal({
  total: 0,})
}
describe('CartContainerComponent', () => {
    let component: CartContainerComponent;
    let currencyPipe:CurrencyPipe
    let fixture: ComponentFixture<CartContainerComponent>;
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({imports: [CartContainerComponent], providers:[{provide: CartStore, useClass: MockCartStore}, CurrencyPipe]}).compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(CartContainerComponent);
      component = fixture.componentInstance;
      currencyPipe = TestBed.inject(CurrencyPipe)
      fixture.detectChanges();
    });
    it('should create', () => {
      // Use boolean coercion (!!) for truthy, and use Jasmine's .toBeTrue() or .toBeTruthy() if available, otherwise .toBe(true)
      expect(!!component).toBe(true);
    });
    it('should not show cart items', ()=>{
      const h4 = fixture.debugElement.query(By.css('.empty-cart'));
      expect(!!h4).toBe(true);
    });
    it('should have amount 0', () => {
      const total = fixture.debugElement.query(By.css('.cart-total span')).nativeElement;
      expect(total.textContent.trim() === currencyPipe.transform(0)).toBe(true);
    });
  });
