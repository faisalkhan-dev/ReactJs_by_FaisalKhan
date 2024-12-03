import { useState, useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passWordRef=useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*_.";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char)
    }
    setPassword(pass);

  }, [length, numbersAllowed, charactersAllowed, setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passWordRef.current?.select();
    // passWordRef.current?.setSelectionRange(0,2)  ,it will copy only first 2 characters of password
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    PasswordGenerator();
  },[length,numbersAllowed,charactersAllowed,PasswordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-10 my-5   bg-gray-700 text-black-1000'>
        <h1 className='text-white text-center '>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passWordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
           className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
           >Copy</button>
        </div>

          <div className='flex text-sm gap-x-1'>
            <div className='flex items-center gap-x-1 '>
              <input
               type="range"
               min={8}
               max={100}
               values={length}
               className='cursor-pointer'
               onChange={(e)=>{setLength(e.target.value)}}
              />
              <label className='text-white px-4 mx-'>Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-6'>
            <label className='text-white '>Numbers <br/>Allowed:{numbersAllowed}</label>
              <input
               type="checkbox"
               defaultChecked={numbersAllowed}
               id="numberInput"
               onChange={()=>{setNumbersAllowed((prev)=>!prev)}}
              />
            </div>
            <div className='flex items-center gap x-1 '>
            <label className='text-white'>Characters <br />Allowed:{charactersAllowed}</label>
              <input
               type="checkbox"
               values={charactersAllowed}
               id="CharacterInput"
               onChange={()=>{setCharactersAllowed((prev)=>!prev)}}
              />
             
            </div>
            
          </div>

      </div>

    </>
  )
}

export default App
