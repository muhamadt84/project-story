// redux/reducers/countReducer.js
const initialState = {
  product: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS':
      return {
        ...state,
        product: action.payload || state.product,
      };
    default:
      return state;
  }
};
