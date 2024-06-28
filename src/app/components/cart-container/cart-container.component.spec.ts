import { CurrencyPipe } from "@angular/common";
import { signal } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CartStore } from "src/app/redux/cart.reducer";
import { CartContainerComponent } from "./cart-container.component";
class MockCartStore {
 cartItems = signal([])
 totalAndAmountObject = signal({
  total: 0,})
}
describe('CardContainerComponent', () => {
    let component: CartContainerComponent;
    let service;
    let datePipe
    let fixture: ComponentFixture<CartContainerComponent>;
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({imports: [CartContainerComponent], providers:[{provide: CartStore, useClass: MockCartStore}, CurrencyPipe]}).compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(CartContainerComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(CartStore);
      datePipe = TestBed.inject(CurrencyPipe)
      fixture.detectChanges();
    });
    it('should create', () => {
      expect(component).toBeDefined();
    });
    it('should not show card items', ()=>{
      const h4 = fixture.debugElement.query(By.css(".empty-cart"));
      expect(h4).toBeTruthy();
    })
    it('should have amount 0', () => {
      const total = fixture.debugElement.query(By.css(".cart-total span")).nativeElement
      expect(total.textContent).toEqual(datePipe.transform(0))
    })
  });
