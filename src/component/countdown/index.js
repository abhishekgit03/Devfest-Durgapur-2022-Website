import React, { useEffect, useState } from 'react';
import styles from "./countdown.module.scss";

function Countdown() {

  let dest = new Date("Nov 27, 2022 10:00:00").getTime();

  let now = new Date().getTime();
  let diff = dest - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuites = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);


  const [getDay, setDay] = useState(days);
  const [getHours, sethours] = useState(hours);
  const [getMin, setMin] = useState(minuites);
  const [getSec, setSec] = useState(seconds);

  const tick = () => {
    now = new Date().getTime();
    diff = dest - now;
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minuites = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if ((days === 0 && hours === 0 && minuites === 0 && seconds === 0) || (days < 0)) {
      days = hours = minuites = seconds = 0;
    }
    if (days >= 0 && days < 10) {
      days = `0${days}`;
    }
    if (hours >= 0 && hours < 10) {
      hours = `0${hours}`;
    }
    if (minuites >= 0 && minuites < 10) {
      minuites = `0${minuites}`;
    }
    if (seconds >= 0 && seconds < 10) {
      seconds = `0${seconds}`;
    }
    setDay(days);
    sethours(hours);
    setMin(minuites);
    setSec(seconds);
  }
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.heading}>Days to go...</h3>
        <div className={styles.timer_box}>
          <span className="day">
            {getDay}
            <div>Days</div>
          </span>
          <span className="hrs">
            {getHours}
            <div>Hours</div>
          </span>
          <span className="min">
            {getMin}
            <div>Minuites</div>
          </span>
          <span className="sec">
            {getSec}
            <div>Seconds</div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Countdown;