const intialState = {
  items: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        items: [],
      };
    default:
      return state;
  }
};
