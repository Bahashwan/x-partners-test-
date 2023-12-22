import React, { useEffect, useState } from 'react';
import UserCard from './UserCard/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UsersList.module.scss';
import { fetchAllUsers } from '../../redux/userSlice';
import ageCalc from '../../methods/ageCalc';

const UsersList = () => {
  const { PageSlice } = useSelector((state) => state);
  const dispatch = useDispatch();

  const users = [
    {
      name: 'mohanad',
      age: 25,
      photo: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
    {
      name: 'mohanad',
      age: 25,
      photo: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
  ];

  const user = useSelector((state) => state.user);

  //   let isLogged = user.user.id != null && user.user.id !== '';

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.usersListMainDiv}>
      {PageSlice.status === 'usersList' ? (
        <>
          <div>Users List:</div>
          <div className={styles.userslist}>
            {user.usersList
              .filter((el) => el._id !== user.user.id)
              .map((user) => (
                <UserCard
                  name={user.name}
                  photo={`http://localhost:5000/${
                    user.photos[user.photos.length - 1].filename
                  }`}
                  key={user._id}
                  age={ageCalc(user.dateOfBirth)}
                />
              ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UsersList;
