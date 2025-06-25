import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const exisitingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (exisitingItem) {
        // If it exists, increase the quantity
        exisitingItem.qty += 1;
        return;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else if (item && item.qty === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
