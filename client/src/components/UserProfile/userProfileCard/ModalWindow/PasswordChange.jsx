import React, { useState } from 'react';
import { userFetch } from '../../../../methods/auth';
import styles from './ModalWindow.module.scss'

const PasswordChange = () => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onChange = {
    password: (e) => {
      setPassword(e.target.value);
    },
    rePassword: (e) => {
      setRePassword(e.target.value);
    },
  };

  const submit = () => {
    const token = localStorage.token;
    const data = { password };
    if (password === rePassword) {
      userFetch
        .userEdit(token, data)
        .then((res) => {
          res.updatedUser ? window.location.reload() : console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      alert('Passwords Dont Match');
    }
  };
  return (
    <>
      {' '}
      <div className={`input-group mb-3 ${styles.inputDiv}`}>
        <span
          className={`input-group-text ${styles.innerInputSpan}`}
          id="basic-addon1"
        >
          Password
        </span>
        <input
          value={password}
          onChange={onChange.password}
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className={`input-group mb-3 ${styles.inputDiv}`}>
        <span
          className={`input-group-text ${styles.innerInputSpan}`}
          id="basic-addon1"
        >
          Re-Password
        </span>
        <input
          value={rePassword}
          onChange={onChange.rePassword}
          type="password"
          className="form-control"
          placeholder="Re-Password"
        />
      </div>
      <div className={styles.submitButton}>
        <button type="button" className="btn btn-primary" onClick={submit}>
          Primary
        </button>
      </div>

    </>
  );
};

export default PasswordChange;
