import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-emerald-500 text-black rounded-xl'>Tailwind text</h1>
      <br /><br />
      <Card displayusername btnText="For submit click here"/>
      <Card username="Faisal Khan" btnText="For reject click here"/>
    </>
  )
}

export default App
