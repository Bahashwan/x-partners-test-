import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import RegistrationForm from './RegForm/RegistrationForm';
import UserPhotoUpload from './UserPhotoUpload/UserPhotoUpload';
import RegSuccess from './RegSuccess/RegSuccess';
import { fetchUserByToken } from '../../redux/userSlice';

const RegistrationPage = () => {
  
  const { regPage } = useSelector((state) => state);
  const { user } = useSelector((state) => state.user);

  return (
    <div>

      {regPage.page  === 1 && !user.id ? (
        <RegistrationForm />
      ) : regPage.page === 2 ?  (
        <UserPhotoUpload />
      ) : regPage.page === 3 ? (
        <RegSuccess />
      ):<></>}
    </div>
  );
};

export default RegistrationPage;
