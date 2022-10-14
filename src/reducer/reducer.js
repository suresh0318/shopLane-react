const intialState = {
  items: [],
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
        searchItems : action.payload
      };
    case "ADD_TO_CART":
      const  product = action.payload;
      const exist = state.items.find((x) => x.id === product.id);
      if(exist){
          return state
      }else{
          const product = action.payload;
          return{
              ...state,
             items:[product,...state.items]
          }
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        items: []
      };
    case "INCREASE_QTY":
      const index = state.items.findIndex(
        (item) => item.id === action.payload.itemId
      );
      const newArray = [...state.items];
      newArray[index].qty = action.payload.incQty;
      return { ...state, items: newArray };

    case "SEARCH_WORD":
      return {
        ...state,
        searchItems: state.data.filter(
          (item) =>
            item.name.toLowerCase().includes(action.payload) ||
            item.brand.toLowerCase().includes(action.payload)
        ),
      };

    default:
      return state;
  }
};
