import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import data from '../../data.json';
import { CartItem } from '../models/CartItem.js';
import { computed } from '@angular/core';

export interface IStore {
  cartItems: CartItem[];
}

export const CartStore = signalStore(
  withState({ cartItems: data }),
  withComputed(({ cartItems }) => {
    return {
      totalAndAmountObject: computed(() =>
        cartItems().reduce(
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
        )
      ),
    };
  }),
  withMethods(({ cartItems, ...store }) => ({
    emptyCart() {
      patchState(store, { cartItems: [] });
    },
    removeItem(id: number) {
      patchState(store, {
        cartItems: cartItems().filter((cartItem) => cartItem.id !== id),
      });
    },
    increaseAmount(id: number) {
      const newCart = cartItems().map((cartItem) => {
        if (cartItem.id === id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      patchState(store, {
        cartItems: newCart,
      });
    },
    decreaseAmount(id: number, amount: number) {
      let crtItems: CartItem[];
      if (amount === 1) {
        crtItems = cartItems().filter((cartItem) => cartItem.id !== id);
      } else {
        crtItems = cartItems().map((cartItem) => {
          if (cartItem.id === id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        });
        patchState(store, {
          cartItems: crtItems,
        });
      }
    },
  }))
);
