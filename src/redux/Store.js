import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.js';
import categoryReducer from './slices/CategorySlice.js';
import searchReducer from './slices/SearchSlice.js';
const Store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});
export default Store;
