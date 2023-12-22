import React, { useState } from 'react';
import styles from './LoginPage.module.scss';
import { userFetch } from '../../../methods/auth';
import { useDispatch } from 'react-redux';
import { setUser, setUserID } from '../../../redux/userSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = {
    email: (e) => {
      setEmail(e.target.value);
    },
    password: (e) => {
      setPassword(e.target.value);
    },
  };

  const submit = () => {
    const data = { email, password };
    userFetch.log(data).then((res) => {
      if (res.success) {
        const user = res.user;
        dispatch(
          setUser({
            name: user.name,
            email,
            dateOfBirth: user.dateOfBirth,
            sex: user.sex,
          })
        );
        dispatch(setUserID(user['_id']));
        localStorage.setItem('token', res.token);
        // alert('done');
        window.location.reload();
      } else console.log(res);
    });
  };
  return (
    <div className={styles.logMain}>
      {/* EMAIL */}
      <div className={`input-group mb-3 ${styles.inputDiv}`}>
        <span
          className={`input-group-text ${styles.innerInputSpan}`}
          id="basic-addon1"
        >
          @
        </span>
        <input
          value={email}
          onChange={onChange.email}
          type="text"
          className="form-control"
          placeholder="email"
        />
      </div>
      {/* Password & RE-Password */}
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
      <div className={styles.submitButton}>
        <button type="button" className="btn btn-primary" onClick={submit}>
          Primary
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
