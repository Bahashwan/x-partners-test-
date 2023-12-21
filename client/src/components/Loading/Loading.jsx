import React, { useState, useEffect } from 'react';
import './Loading.css';
import gif from './loading.gif'

const Loading = () => {

 useEffect(() => {
   
 }, []);

 return (
    <div className="loading-screen">
      <img src={gif} alt='' width='250px' />
      </div>
 );
};

export default Loading;