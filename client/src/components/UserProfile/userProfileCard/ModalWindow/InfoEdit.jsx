import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ModalWindow.module.scss';
import { userFetch } from '../../../../methods/auth';

const InfoEdit = () => {
  const user = useSelector((state) => state.user.user);
  const [name, setName] = useState(user.name);
  const [date, setDate] = useState(user.dateOfBirth);
  const [sex, setSex] = useState(user.sex);

  const onChange = {
    name: (e) => {
      setName(e.target.value);
    },
    date: (e) => {
      setDate(new Date(e.target.value).toISOString().slice(0, 10));
    },
    sex: (e) => {
      setSex(e.target.value);
    },
  };
  const submit = () => {
    const token = localStorage.token
    const data = {name,dateOfBirth:date,sex}

    userFetch.userEdit(token,data).then((res)=>{
        res.updatedUser? window.location.reload():console.log(res);
    }).catch((err)=>console.log(err))
  };

  return (
    <>
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
      <select
        onChange={onChange.sex}
        className="form-select"
        aria-label="Default select"
        value={sex}
      >
        <option value={''} selected disabled>
          Please Chose Your Sex:
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div className={styles.submitButton}>
        <button type="button" className="btn btn-primary" onClick={submit}>
          Primary
        </button>
      </div>
    </>
  );
};

export default InfoEdit;
