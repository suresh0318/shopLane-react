const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
