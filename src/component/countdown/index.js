import styles from './countdown.module.scss';
import CountDownTimer from './countdowntimer.js';

function Countdown() {

    const hoursMinSecs = {day:40, hours:23, minutes: 11, seconds: 40}
  
    return (
       
      <div className={styles.App}>
         <div className={styles.title}>Days to go...</div>
         <div className={styles.timer}><CountDownTimer hoursMinSecs={hoursMinSecs}/>
      </div>
   </div>
      
    );
  }

export default Countdown;