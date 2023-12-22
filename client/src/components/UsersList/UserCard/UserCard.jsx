import React from 'react';
import styles from './UserCard.module.scss'

const UserCard = ({name,age,photo}) => {

  return (
    <div className={`card ${styles.userCard}`} >
      <img alt="lol" src={photo} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Age:{age}</li>
      </ul>
    </div>
  );
};

export default UserCard;
