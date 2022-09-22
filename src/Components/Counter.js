import React, { useEffect, useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState( 0 );
    useEffect( () => {
        console.log( "useEffect Called" )
        //let's only re-render this component when the counter variable changes
    } ,[counter]);
    function handleClick() {
        setCounter( prevCount => prevCount + 1 );
    }
  return (
      <div>
          <button onClick={handleClick}>{`Clicked ${counter}`}</button> 
    </div>
  )
}

export default Counter