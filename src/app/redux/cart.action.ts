import { Action } from '@ngrx/store';
export enum CartActionTypes {
  emptyCart = 'Empty cart',
  removeItem = 'Remove item',
  increaseAmount = 'Increase amount',
  decreaseAmount = 'Decrease amount',
  getTotalAndAmount = 'Get total and amount',
}
export class ActionEx implements Action {
  readonly type;
  payload?: any;
}
export class EmptyCart implements ActionEx {
  readonly type = CartActionTypes.emptyCart;
}
export class RemoveItemFromCart implements ActionEx {
  readonly type = CartActionTypes.removeItem;
  constructor(public payload: number) {}
}
export class IncreaseItemAmount implements ActionEx {
  readonly type = CartActionTypes.increaseAmount;
  constructor(public payload: number) {}
}
export class DecreaseItemAmount implements ActionEx {
  readonly type = CartActionTypes.decreaseAmount;
  constructor(public payload: { id: number; amount: number }) {}
}
export class GetTotalAndAmount implements ActionEx {
  readonly type = CartActionTypes.getTotalAndAmount;
}
