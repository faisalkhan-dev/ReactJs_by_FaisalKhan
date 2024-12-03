import Greet from "./greet"

function App() {

  //you can return only one parent element so wrap them in fragments <></>
  return (
    <>                                  
      <h1>React app using vite</h1>
      <Greet />
    </>
  )
}

export default App
