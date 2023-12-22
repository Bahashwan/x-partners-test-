import React from 'react';
import { useSelector } from 'react-redux';
import UserProfileCard from './userProfileCard/UserProfileCard';

const UserProfile = () => {
  const { PageSlice } = useSelector((state) => state);
  console.log(PageSlice);
  return <>{PageSlice.status === 'usersProfile' ? 
  <div>

    <UserProfileCard />

    </div>
    
    : <></>}
    
    </>;
};

export default UserProfile;
