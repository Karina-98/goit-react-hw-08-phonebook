import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import { Notify } from 'notiflix';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handelFulfilledRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handelRejectedRegister = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = action.payload;
  Notify.failure(
    'User validation failed: password: Path `password` is shorter than the minimum allowed length (7).'
  );
};

const handelFulfilledLogIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handelRejectedLogIn = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = action.payload;
  Notify.failure('Wrong email or password! Please try again.');
};

const handelFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handelFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handelRejectedRefresh = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handelFulfilledRegister)
      .addCase(register.rejected, handelRejectedRegister)
      .addCase(logIn.fulfilled, handelFulfilledLogIn)
      .addCase(logIn.rejected, handelRejectedLogIn)
      .addCase(logOut.fulfilled, handelFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handelFulfilledRefresh)
      .addCase(refreshUser.rejected, handelRejectedRefresh)
});

export const authReducer = authSlice.reducer;
