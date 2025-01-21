import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalPrice: 0,
        totalDiscount: 0,
        cartItems: []
    },
    reducers: {
        add(state, action) {
            const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.product.id === action.payload.id);
            let newTotalPrice = state.totalPrice + action.payload.price;
            let newTotalDiscount = state.totalDiscount + action.payload.discountPercentage;

            if (existingItemIndex === -1) {
                return {
                    ...state,
                    totalPrice: newTotalPrice,
                    totalDiscount: newTotalDiscount,
                    cartItems: [
                        ...state.cartItems,
                        {
                            product: action.payload,
                            quantity: 1
                        }]
                };
            }

            let updatedItems = state.cartItems.map((cartItem, index) => index === existingItemIndex ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            } : cartItem);

            return {
                ...state, totalPrice: newTotalPrice, totalDiscount: newTotalDiscount, cartItems: updatedItems
            };
        },
        remove(state, action) {
            const itemToRemove = state.cartItems.find(cartItem => cartItem.product.id === action.payload.id);
            let updatedItems = state.cartItems.filter(cartItem => cartItem.product.id !== action.payload.id);
            let newTotalPrice = state.totalPrice - itemToRemove.product.price * itemToRemove.quantity;
            let newTotalDiscount = state.totalDiscount - itemToRemove.product.discountPercentage * itemToRemove.quantity;

            return {
                ...state, totalPrice: newTotalPrice, totalDiscount: newTotalDiscount, cartItems: updatedItems
            };
        },
        increaseQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(cartItem => cartItem.product.id === action.payload.id);
            let updatedItems = state.cartItems.map(cartItem => cartItem.product.id === action.payload.id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            } : cartItem);
            let newTotalPrice = state.totalPrice + itemToIncrease.product.price;
            let newTotalDiscount = state.totalDiscount + itemToIncrease.product.discountPercentage;

            return {
                ...state, totalPrice: newTotalPrice, totalDiscount: newTotalDiscount, cartItems: updatedItems
            };
        },
        decreaseQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(cartItem => cartItem.product.id === action.payload.id);
            let updatedItems = state.cartItems
                .map(cartItem => cartItem.product.id === action.payload.id ? {
                    ...cartItem,
                    quantity: cartItem.quantity - 1
                } : cartItem)
                .filter(cartItem => cartItem.quantity > 0);
            let newTotalPrice = state.totalPrice - itemToDecrease.product.price;
            let newTotalDiscount = state.totalDiscount - itemToDecrease.product.discountPercentage;

            return {
                ...state, totalPrice: newTotalPrice, totalDiscount: newTotalDiscount, cartItems: updatedItems
            };
        }
    }
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;