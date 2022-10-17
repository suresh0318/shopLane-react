const intialState = {
  cartItems: [],
  word: "",
  data: [],
  searchItems: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case "DATA":
      return {
        ...state,
        data: action.payload,
        searchItems: action.payload,
      };
    case "ADD_TO_CART":
      const product = action.payload;
      const exist = state.cartItems.find((x) => x.id === product.id);
      if (exist) {
        return state;
      } else {
        const product = action.payload;
        return {
          ...state,
          cartItems: [product, ...state.cartItems],
        };
      }
    case "REMOVE_FROM_CART":
      console.log(state);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        cartItems: [],
      };
    case "INCREASE_QTY":
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.itemId
      );
      const newArray = [...state.cartItems];
      newArray[index].qty = action.payload.incQty;
      return { ...state, cartItems: newArray };

    case "SEARCH_WORD":
      let dummyData = state.data.filter(
        (item) =>
          item.name.toLowerCase().includes(action.payload) ||
          item.brand.toLowerCase().includes(action.payload)
      );
      return {
        ...state,
        searchItems: dummyData,
      };

    default:
      return state;
  }
};
