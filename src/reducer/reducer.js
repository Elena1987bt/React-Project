export const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'DISPLAY_PRODUCTS':
      return { ...state, products: payload, loading: false };
    case 'SET_CATEGORY':
      return { ...state, category: payload, loading: false };
    case 'SET_PRODUCT':
      return { ...state, product: payload, category: payload.category, loading: false };
    case 'FILTER_PRODUCTS':
      return { ...state, products: payload, loading: false };
    case 'SET_ALL_PRODUCTS':
      return { ...state, category: payload, loading: true };
    case 'ADD_TO_CART':
      if (state.cart.find((el) => el.id === payload.id)) {
        return { ...state };
      }
      return { ...state, cart: [...state.cart, payload], loading: false };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== payload),
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'ERROR':
      return { ...state, loading: false };
    default:
      return state;
  }
};
// function addNewItem(state, task) {
//   const list = [...state.list];
//   const newItem = {
//     itemId: list.length + 1,
//     task: task,
//     completed: false,
//   };
//   return {
//     list: [...state.list, newItem],
//   };
// }