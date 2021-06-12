import { SET_PRODUCTS, SET_CART, FETCH_CART, FETCH_PRODUCTS } from "./actionTypes";

export const setProducts = products => ({
    type: SET_PRODUCTS,
    payload: products
  });
  
  export const setCart = cart => ({
    type: SET_CART,
    payload: cart
  });

  export const fetchCart = () => ({
      type: FETCH_CART
  })

  export const fetchProducts = () => ({
    type: FETCH_PRODUCTS
  })
  