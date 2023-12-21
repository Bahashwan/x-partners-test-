import { configureStore } from '@reduxjs/toolkit';
import regPageSlice from './redux/regPageSlice';
import userSlice from './redux/userSlice';
// Import your reducer(s)
// import myReducer from './path/to/myReducer';

const store = configureStore({
  reducer: {
    regPage: regPageSlice,
    user:userSlice,
  },
});

export default store;
