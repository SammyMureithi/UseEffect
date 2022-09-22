import React from 'react'

function Clock({time}) {
  return (
      <div>
          <h1>Time is {time.toString()}</h1>
    </div>
  )
}

export default Clock