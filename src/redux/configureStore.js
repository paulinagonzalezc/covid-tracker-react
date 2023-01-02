import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries';
import detailReducer from './details';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    details: detailReducer,
  },
});

export default store;
