const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE') {
    let newCartItems = state.cart.filter(item => item.id !== action.payload);
    return { ...state, cart: newCartItems };
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let tempCart = state.cart
      .map(cartItem => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === 'increase') {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === 'decrease') {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += amount * price;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload };
  }
  throw new Error('no matching action type');
};

export default reducer;
