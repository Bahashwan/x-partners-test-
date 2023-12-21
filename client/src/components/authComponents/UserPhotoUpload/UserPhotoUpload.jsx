import React,{useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import {next} from '../../../redux/regPageSlice'
import { setUserPhoto } from '../../../redux/userSlice';



const UserPhotoUploda = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.user.user)

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('photo', selectedImage);



    axios.post(`http://localhost:5000/api/photo/upload/${user.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res)=>{
      console.log(res);
      dispatch(setUserPhoto({photo:res.data.photo.filename}))
      dispatch(next())})
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
    <div className="form-group">
      <input
        type="file"
        accept="image/*"
        className="form-control"
        id="imageInput"
        onChange={handleImageChange}
      />
    </div>
    <button type="submit" className="btn btn-primary">Upload</button>
  </form>
  )
}

export default UserPhotoUploda