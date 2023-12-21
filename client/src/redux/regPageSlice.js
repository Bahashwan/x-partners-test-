import { createSlice } from '@reduxjs/toolkit';

const regPageSlice = createSlice({
  name: 'regPage',
  initialState: { status: 'reg', page: 1 },
  reducers: {
    next: (state) => {
      state.page = state.page + 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    loginPageControl: (state) => {
      state.status = 'log';
    },
    regPageControl: (state) => {
      state.status = 'reg';
    },
  },
});

export const { next, resetPage, loginPageControl, regPageControl } = regPageSlice.actions;
export default regPageSlice.reducer;
