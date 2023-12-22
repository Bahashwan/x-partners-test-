import React, { useState } from 'react';
import styles from './ModalWindow.module.scss';
import InfoEdit from './InfoEdit';
import PhotoChange from './PhotoChange';
import PasswordChange from './PasswordChange';

const ModalWindow = ({ type,toggler }) => {


  return (
    <div className={styles.modalMainDiv}>
      <div className={styles.modalContent}>{type}
      <div onClick={toggler}>X</div>
      <div className={styles.innerDiv}>
        {type === 'Edit Info'?<InfoEdit />:type ==="Change Photo"?<PhotoChange />:type ==="Change Password"?<PasswordChange />:<></>}
        
      </div>
      
      </div>
    </div>
  );
};

export default ModalWindow;
