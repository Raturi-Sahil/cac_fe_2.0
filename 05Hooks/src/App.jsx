import { useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function increase() {
    console.log("Value increased");
    setCount(count => count+1);
  }
  
  const decrease = () => {
      console.log("Value decreased");
      setCount(count - 1);
  
  }

  return (
    <>
      <h1>React + Vite</h1>
      <h2>Counter is : {count}</h2>
      <button onClick={increase}>Increase Count</button>
      <button onClick={decrease}>Decrease Count</button>
    </>
  )
}

export default App
