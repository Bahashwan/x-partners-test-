import React, { useState } from 'react';
import styles from './regForm.module.scss';
import { userFetch } from '../../../methods/auth';
import { useDispatch, useSelector } from 'react-redux';
import {next} from '../../../redux/regPageSlice'
import { setUser,setUserID } from '../../../redux/userSlice';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.user)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [date, setDate] = useState('');
  const [sex, setSex] = useState('');

  const onChange = {
    name: (e) => {
      setName(e.target.value);
    },
    email: (e) => {
      setEmail(e.target.value);
    },
    password: (e) => {
      setPassword(e.target.value);
    },
    rePassword: (e) => {
      setRePassword(e.target.value);
    },
    date: (e) => {
      setDate(new Date(e.target.value).toISOString().slice(0, 10));
    },
    sex: (e) => {
      setSex(e.target.value);
    },
  };
  const submit = () => {
    const data = { name, email, password, rePassword, dateOfBirth: date, sex };
    console.log(data);
    userFetch.reg(data).then((res) => {
      if (res.success){ 
        dispatch(setUser({name,email,dateOfBirth:date,sex}))
        dispatch(setUserID(res.user['_id']))
        localStorage.setItem('token', res.token)
        // alert('done');
      dispatch(next());
    }
      else alert(res);
    });
  };

  return (
    <div className={styles.regMain}>
      {/* NAME */}
      <div className={`input-group mb-3 ${styles.inputDiv}`}>
        <span
          className={`input-group-text ${styles.innerInputSpan}`}
          id="basic-addon1"
        >
          Name
        </span>
        <input
          value={name}
          onChange={onChange.name}
          type="text"
          className="form-control"
          placeholder="Name"
        />
      </div>
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

      {/* date of birth */}
      <div className={`input-group mb-3 ${styles.inputDiv}`}>
        <span
          className={`input-group-text ${styles.innerInputSpan}`}
          id="basic-addon1"
          format="DD-MM-YYYY"
        >
          Date Of Birth
        </span>
        <input
          value={date}
          onChange={onChange.date}
          type="date"
          className="form-control"
          placeholder=""
        />
      </div>
      {/* SEX */}
      <select
        onChange={onChange.sex}
        className="form-select"
        aria-label="Default select"
        value={sex}
      >
        <option value={''} selected disabled>
          Please Chose Your Sex:
        </option>
        <option value="male">
          Male
        </option>
        <option  value="female">
          Female
        </option>
      </select>
      <div className={styles.submitButton}>

      <button type="button" className="btn btn-primary" onClick={submit}>
        Primary
      </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
