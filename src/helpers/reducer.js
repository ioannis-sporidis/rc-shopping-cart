const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    let newCartItems = state.cart.filter(item => item.id !== action.payload);
    return {
      ...state,
      cart: newCartItems,
    };
  }
  throw new Error('no matching action type');
};

export default reducer;
