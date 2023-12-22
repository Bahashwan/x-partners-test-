import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PhotoChange = () => {
  const user = useSelector((state) => state.user.user);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('photo', selectedImage);
    axios
      .post(`/api/photo/upload/${user.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        res.data.photo.filename ? window.location.reload() : console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    // style={{display:"flex", flexDirection:"column", gap:"15px"}}
    <form onSubmit={handleSubmit} className="my-4">
      <div className="form-group" style={{ paddingBottom: '15px' }}>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          id="imageInput"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Upload New Photo
      </button>
    </form>
  );
};

export default PhotoChange;
