import React, { useState, useEffect } from 'react';
import "./cssPages/Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className = "TimerContainer" id = "TimerContainer">
     <div className="TimerApp" id = "TimerApp">
        <div className="time">
          {seconds}s
        </div>
        <div className="row">
          <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
           {isActive ? 'Pause' : 'Start'}
         </button>
         <button className="button" onClick={reset}>
           Reset
          </button>
       </div>
     </div>
    </div> 
  );
};

export default Timer;