import toast from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

const CartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setAddCartItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success('Item QTY Incresed');
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to Cart`);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(item => item.id !== action.payload.id);

      state.cartItems = removeItem;
      localStorage.setItem('cart', JSON.stringify(state.cartItems));

      toast.success(`${action.payload.title} Removed From Cart`);
    },

    setIncreseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success('Item QTY Incresed');
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setDecreseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.success('Item QTY Decresed');
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success('Cart Cleared');
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    }
  }
});

export const {
  setAddCartItem,
  setClearCartItems,
  setCloseCart,
  setDecreseItemQty,
  setIncreseItemQty,
  setOpenCart,
  setRemoveItemFromCart
} = CartSlice.actions;

export const selectCartState = state => state.cart.cartState;
export const selectCartItems = state => state.cart.cartItems;

export default CartSlice.reducer;
