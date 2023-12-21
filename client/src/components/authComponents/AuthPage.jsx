import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage/LoginPage';
import { fetchUserByToken } from '../../redux/userSlice';
import Loading from '../Loading/Loading';

const AuthPage = () => {
  const { regPage } = useSelector((state) => state);
  const {user}=useSelector(state=>state)
const dispatch = useDispatch()


  useEffect(()=>{
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(fetchUserByToken(token));
    }
  },[dispatch])
  return (
    <div>

{user.status === 'loading'&& <Loading />}

      {regPage.status === 'reg' ? (
        <RegistrationPage />
      ) : regPage.status === 'log' ? (
        <LoginPage />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AuthPage;
