import { createSlice } from '@reduxjs/toolkit';

const PageSlice = createSlice({
  name: 'Page',
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
    ulPageControl:(state)=>{
      state.status = 'usersList';
    },
    upPageControl:(state)=>{
      state.status = 'usersProfile';
    },
  },
});

export const { next, resetPage, loginPageControl, regPageControl,ulPageControl,upPageControl } = PageSlice.actions;
export default PageSlice.reducer;
