import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  /*
  const addValue = ()=>{
    console.log("Value Added",Math.random());
    // writing setCounter for 4 times doesn't increment the counter by 4
    // React batches this updates, and process them in the order they are called
    // so all setCounter() uses the last counter value
    // setCounter takes the previous value of counter and updates it.
    setCounter(Math.min(20,counter+1));
    setCounter(Math.min(20,counter+1));
    setCounter(Math.min(20,counter+1));
    setCounter(Math.min(20,counter+1));
  }
  */

  const addValue = ()=>{
    // Now this code will update counter by 4
    // When setCounter is executed, it fetches the prev Counter value and then execute
    setCounter((prevCounter)=>Math.min(prevCounter+1,20));
    setCounter((prevCounter)=>Math.min(prevCounter+1,20));
    setCounter((prevCounter)=>Math.min(prevCounter+1,20));
    setCounter((prevCounter)=>Math.min(prevCounter+1,20));
  }



  const removeValue = ()=>{
    setCounter(Math.max(0,counter-1));
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick = {addValue}>Add Value {counter}</button>
      <br />
      <button onClick = {removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
