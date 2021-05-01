import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

const contactsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const normalizedName = payload.name.toLowerCase();
    if (state.find(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
