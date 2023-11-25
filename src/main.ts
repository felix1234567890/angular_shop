import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { StoreModule } from "@ngrx/store";
import { CartReducer } from "./app/redux/cart.reducer";
import { importProvidersFrom } from "@angular/core";

bootstrapApplication(AppComponent, {providers:[ importProvidersFrom(StoreModule.forRoot({ cart: CartReducer }))]}).catch((err) => console.error(err));