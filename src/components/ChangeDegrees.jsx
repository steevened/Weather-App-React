import React from 'react'

function ChangeDegrees({ setCelsius, celsius }) {
  return (
    <>
      <button onClick={() => setCelsius(!celsius)}>
        Change to {celsius ? '°F' : '°C'}
      </button>
    </>
  )
}

export default ChangeDegrees
