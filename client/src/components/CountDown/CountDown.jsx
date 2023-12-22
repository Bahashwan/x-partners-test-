import React, { useState, useEffect } from 'react';

const Countdown = ({countStartValue}) => {
 const [count, setCount] = useState(countStartValue);

 const startCountdown = () => {

    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
 };

 useEffect(() => {
    startCountdown();
 }, [count]);

 return <div>{count} sec</div>;
};

export default Countdown;