import data from '../../data.json';
import { CartItem } from '../models/CartItem.js';
import { ActionEx, CartActionTypes } from './cart.action';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface IStore {
  cartItems: CartItem[];
}

const initialState: IStore = {
  cartItems: data,
};

export const CartReducer = (state = initialState, action: ActionEx) => {
  switch (action.type) {
    case CartActionTypes.emptyCart:
      return { cartItems: [] };
    case CartActionTypes.removeItem:
      return {
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
    case CartActionTypes.increaseAmount:
      const newCart = state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return {
        ...state,
        cartItems: newCart,
      };
    case CartActionTypes.decreaseAmount:
      if (action.payload.amount === 1) {
        return {
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          ),
        };
      }
      const updatedCart = state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
      return {
        cartItems: updatedCart,
      };
    default:
      return state;
  }
};
const featureSelector = createFeatureSelector<IStore>('cart');
export const totalAndAmountObject = createSelector(featureSelector, (state) => {
  return state.cartItems.reduce(
    (cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      cartTotal.amount += amount;
      const itemTotal = price * amount;
      cartTotal.total += itemTotal;
      return cartTotal;
    },
    {
      total: 0,
      amount: 0,
    }
  );
});
