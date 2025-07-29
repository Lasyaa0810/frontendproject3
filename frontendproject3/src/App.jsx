import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Welcome to kl university </h1>
      <h2>Today's topic is Introduction to react</h2>
      <h3>Today's date is july 23rd</h3>
      <h4>Lasya</h4>
      <h4>2400030237</h4>
      <Link to="/Page1">Go to Page1</Link>
      <br></br>
      <Link to="/Page2">Go to Page2</Link>
      <br></br>
      <Link to="/Page3">Go to Page3</Link> 
    </>
  )
}

export default App
