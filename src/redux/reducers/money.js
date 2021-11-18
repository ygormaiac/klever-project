import { createSlice } from '@reduxjs/toolkit';

const initialMoneyState = {
  money: [],
};

const moneySlice = createSlice({
  name: 'money',
  initialState: initialMoneyState,
  reducers: {
    addToMoney(state, action) { state.money.push(action.payload) },
    removeToMoney(state, action) { state.money = state.money.filter((m) => m.id !== action.payload) },
    editToMoney(state, action) { state.money = state.money.filter((m) => m.id === action.payload) },
  },
});

export const moneyActions = moneySlice.actions;

export default moneySlice;