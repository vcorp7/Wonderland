import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../features/pageSections/pageSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer
  },
});
