import React, { useEffect, useState } from 'react'
import Clock from './Clock';


function UnmountedCounter() {
    const [timeUnmount, setTime] = useState( new Date() );
    const [showTime, setShowTime] = useState( true );
    function handleClick() {
        setShowTime( prevState => !prevState );
    }
    useEffect( () => {
        console.log( "Timer still running" );
       const intervalId= setInterval( () => {
            setTime( new Date() );
        }, 1000 )
        return function cleanUp() {
            clearInterval( intervalId );
        }
    },[])
  return (
      <div>
          <h1>Unmountable Time</h1>
          <button onClick={handleClick}>{showTime ? "Hide Timer" : "Show Timer"}</button>
         {showTime?<Clock time={timeUnmount} />:null}
    </div>
  )
}

export default UnmountedCounter