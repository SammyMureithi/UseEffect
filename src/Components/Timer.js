import React, { useEffect, useState } from 'react'

function Timer() {
    const [time, setTimer] = useState( new Date() );
    useEffect( () => {
        setInterval( () => {
            setTimer( new Date() ); 
        },1000)
    },[])

  return (
      <div>
          <p>{`Current time is ${time.toString()}`}</p>
    </div>
  )
}

export default Timer