import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ageCalc from '../../../methods/ageCalc';
import ModalWindow from './ModalWindow/ModalWindow';

const UserProfileCard = () => {
  const user = useSelector((state) => state.user.user);
  const [isClosed,setIsClosed] = useState(true)
  const [type,setType]=useState('')
const toggleModal = ()=>{
setIsClosed(prev=>!prev)
}

  const onClickEdit={
info:()=>{
setType("Edit Info")
toggleModal()
},
photo:()=>{
    setType("Change Photo")
    toggleModal()
},
password:()=>{
    setType("Change Password")
    toggleModal()
}
  }
  return (
    <>
    <div className="card" style={{ width: '18rem' }}>
      <img
        alt="lol"
        src={`/${
            user.photo[user.photo.length - 1].filename
        }`}
        />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">AGE: {ageCalc(user.dateOfBirth)}</li>
        <li className="list-group-item">SEX: {user.sex}</li>
      </ul>
      <div
        className="card-body"
        style={{ display: 'flex', gap: '15px', justifyContent:"space-around"}}
        >
        <button type="button" className="btn btn-primary" onClick={onClickEdit.info}>
          Edit Info
        </button>
        <button type="button" className="btn btn-primary" onClick={onClickEdit.photo}>
          Change Photo
        </button>
        <button type="button" className="btn btn-danger" onClick={onClickEdit.password}>
          Change Password
        </button>
      </div>
    </div>
          {!isClosed&&<ModalWindow type={type} toggler={toggleModal}/>}
          </>
  );
};

export default UserProfileCard;
