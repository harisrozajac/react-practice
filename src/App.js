import React, { useState } from 'react'
import './App.css'

const Button = (props) => {
  const handleClick = () => props.onClickFunction(props.increment)
  return <button onClick={handleClick}>+{props.increment}</button>
}

const Display = (props) => {
  return <div>{props.message}</div>
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue)
  const currentTime = new Date().toLocaleTimeString()

  return (
    <div className='App'>
      <h1>React useState() example</h1>
      <Button onClickFunction={incrementCounter} increment={5} />
      <Display message={counter} />
      <h1>Notes</h1>
      <p>Props can also hold functions. Not just data.</p>
      <pre>{currentTime}</pre>
    </div>
  )
}

export default App
