import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import RegistrationForm from './RegForm/RegistrationForm';
import UserPhotoUpload from './UserPhotoUpload/UserPhotoUpload';
import RegSuccess from './RegSuccess/RegSuccess';
import { fetchUserByToken } from '../../redux/userSlice';

const RegistrationPage = () => {
  
  const { PageSlice } = useSelector((state) => state);
  const { user } = useSelector((state) => state.user);

  return (
    <div>

      {PageSlice.page  === 1 && !user.id ? (
        <RegistrationForm />
      ) : PageSlice.page === 2 ?  (
        <UserPhotoUpload />
      ) : PageSlice.page === 3 ? (
        <RegSuccess />
      ):<></>}
    </div>
  );
};

export default RegistrationPage;
