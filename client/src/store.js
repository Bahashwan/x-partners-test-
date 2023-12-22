import { configureStore } from '@reduxjs/toolkit';
import PageSlice from './redux/PageSlice';
import userSlice from './redux/userSlice';
// Import your reducer(s)
// import myReducer from './path/to/myReducer';

const store = configureStore({
  reducer: {
    PageSlice: PageSlice,
    user: userSlice,
  },
});

export default store;
