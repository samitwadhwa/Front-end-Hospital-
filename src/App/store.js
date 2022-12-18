import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import selectedReducer from "../features/statesAndDistricts/stateSlice"
export const store = configureStore({
  reducer: {
    selected: selectedReducer
  },
});