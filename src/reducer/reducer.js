const intialState = {
  items: [],
  word: "",
  data:[],
  searchItems:[]
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case "DATA":
      return{
        ...state,
        data : action.payload,
        searchItems : action.payload
      }
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
      case "SEARCH_WORD":
        return {
          ...state,
        searchItems: state.searchItems.filter((item) => item.name.toLowerCase().includes(action.payload) || item.brand.toLowerCase().includes(action.payload)),
        }
      
    default:
      return state;
  }
};
