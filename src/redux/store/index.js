import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import moneySlice from '../reducers/money';

const store = configureStore({
  reducer: {
    money: moneySlice.reducer,
  },
}, composeWithDevTools(applyMiddleware(thunk)));

export default store;