const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";
const SEARCH_WORD = "SEARCH_WORD";
const DATA = "DATA";
const INCREASE_QTY = "INCREASE_QTY";

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
export const increaseQty = (id) => {
  return {
    type: INCREASE_QTY,
    payload: id,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
export const searchWord = (word) => {
  return {
    type: SEARCH_WORD,
    payload: word,
  };
};
export const data = (data) => {
  return {
    type: DATA,
    payload: data,
  };
};
