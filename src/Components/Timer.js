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
          <h1>{`Time:${time.toString()}`}</h1>
    </div>
  )
}

export default Timer