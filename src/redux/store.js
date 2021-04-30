import { configureStore } from '@reduxjs/toolkit';

import phoneReducer from './phonebook/phonebook-reducer.js';

const store = configureStore({
  reducer: {
    phonebook: phoneReducer,
  },
});

export default store;
