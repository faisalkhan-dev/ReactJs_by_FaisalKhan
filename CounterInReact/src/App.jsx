import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter=15;
  function addvalue() {
    counter++;
    setCounter(counter)
  }
  function removevalue() {
    if (counter > 0) {
      counter--;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addvalue}>Add value</button>
      <br /><br /><br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
