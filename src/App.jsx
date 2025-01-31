import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('Eya');
  const [lastName,setLastName] = useState('Nehdi');
const handleClick =()=>{setCount(()=>count+1)}
  return (
    <>
     <Header name={name} lastName={lastName} />
     <button onClick={handleClick}>{count}</button>
     <Footer />
    </>
  )
}

export default App
