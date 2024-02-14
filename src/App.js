import React from 'react';
import CountUp from 'react-countup';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <div style={{fontSize:"45px"}}>
        <CountUp start={0} end={100} duration={1}/>
      </div>
    </div>
  )
}

export default App
