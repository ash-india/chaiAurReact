import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)


  // as a props we can't pass directly object or arrays, but as a variable we can pass them
  let myObj = {'name':'Nitesh','title':'modi'};
  let newArr = [1,2,3]; 
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card channel="FirstChannel"  btnText = "Click" obj={myObj} arr={newArr}/>
      <Card channel="SecondChannel" btnText = 'Visit Me' obj={myObj} arr={newArr}/>
    </>
  )
}

export default App