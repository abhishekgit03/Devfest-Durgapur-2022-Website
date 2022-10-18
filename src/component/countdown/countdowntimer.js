import React from 'react'

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { day = 0,hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[days ,hrs, mins, secs], setTime] = React.useState([day,hours, minutes, seconds]);
    
    const tick = () => {
   
        if (days===0 && hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([days,hrs-1, 59, 59]);
        } else if (secs === 0) {
            setTime([days,hrs, mins - 1, 59]);
        } else {
            setTime([days,hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(day),parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${days.toString().padStart(2, '0')}:${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;