import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)

  const incrementCounter = () => {
    // if(counter == 20) return;
    // setCount(counter + 1)
     setCount(prev => Math.min(prev + 1, 20));
  }
  const decrementCounter = () => {
    // if(counter==0) return
    // setCount(counter - 1)

     setCount(prev => Math.max(prev - 1, 0));
  }

  return (
    <>
      <h3>Counter is {counter}</h3>
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
