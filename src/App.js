import React from 'react'
import './index.css';
import Counter from './Counter';

const App = () => {

  return (
    <div>
      <Counter limit= "0" />
      <Counter limit="10" />
      <Counter limit="10" />
    </div>
  )
}

export default App