// redux/actions/countAction.js
export const productList = data => {
  return {
    type: 'PRODUCTS',
    payload: data,
  };
};
