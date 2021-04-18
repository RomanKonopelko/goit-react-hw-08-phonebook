import axios from 'axios';
import {
  registerError,
  registerRequest,
  registerSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './auth-actions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

export default {
  token,
  register,
};
