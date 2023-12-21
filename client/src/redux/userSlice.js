import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserByToken = createAsyncThunk(
  'user/fetchUserByToken',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/login/token', {
        headers: { Authorization: `${token}` },
      });
      return response.data;
      
    } 
    catch (error) {
      return {
        name: '',
        email: '',
        photo: '',
        dateOfBirth: '',
        sex: '',
        id: null,
      }
    }
    }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {user:{
    name: '',
    email: '',
    photo: '',
    dateOfBirth: '',
    sex: '',
    id: null,
  },status:''},
  reducers: {
    setUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.dateOfBirth = action.payload.dateOfBirth;
      state.user.sex = action.payload.sex;
    },
    setUserPhoto: (state, action) => {
      state.user.photo = action.payload.photo;
    },
    setUserID: (state, action) => {
      state.user.id = action.payload;
    },
    logout: (state) => {
      state.user = {
        name: '',
        email: '',
        photo: '',
        dateOfBirth: '',
        sex: '',
        id: null,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserByToken.fulfilled, (state, action) => {
        const userinfo = action.payload;
        state.status = 'success';
        state.user = {
          name: userinfo.name,
          email: userinfo.email,
          photo: userinfo.photos,
          dateOfBirth: userinfo.dateOfBirth,
          sex: userinfo.sex,
          id: userinfo['_id'],
        };
      })
      .addCase(fetchUserByToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setUser, setUserPhoto, setUserID, logout } = userSlice.actions;
export default userSlice.reducer;
