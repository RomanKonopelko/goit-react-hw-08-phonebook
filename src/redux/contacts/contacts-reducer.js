import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactSuccess,
  deleteContactError,
  deleteContactRequest,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  getFilter,
} from './contacts-actions';

const filterReducer = createReducer('', {
  [getFilter]: (_, { payload }) => payload,
});

const contactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => {
    const existedContact = state.filter(
      contact => contact.name === payload.name || contact.number === payload.number,
    );
    if (existedContact.length === 0) {
      return [...state, { ...payload }];
    } else {
      alert('this contact or number already exist');
      return state;
    }
  },

  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => payload !== id),
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const contactsAppReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default contactsAppReducer;
