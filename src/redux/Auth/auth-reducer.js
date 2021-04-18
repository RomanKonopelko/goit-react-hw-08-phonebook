import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerError,
  registerSuccess,
  logoutError,
  logoutSuccess,
  loginError,
  loginSuccess,
  getCurrentUserError,
  getCurrentUserSuccess,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const isAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [registerError]: () => false,
  [logoutSuccess]: () => false,
});

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  isAuthenticated,
  user,
  token,
  error,
});
