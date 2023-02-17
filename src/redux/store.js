import {createStore, combineReducers} from 'redux';
import countReducer from './reducers/countReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  countReducer,
  productReducer,
});

export const store = createStore(rootReducer);
