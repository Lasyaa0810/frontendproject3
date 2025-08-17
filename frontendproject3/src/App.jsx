import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Welcome to kl university </h1>
      <h2>Today's topic is Introduction to react</h2>
      <h3>Today's date is August 6th</h3>
      <h4>Lasya</h4>
      <h4>2400030237</h4>
      <div id='section'>
        <div className='card'>
           <img src='images/Audi logo.jpg' alt='image1'></img>
            <label> <Link to="/Page1">Go To Page1</Link></label>
        </div>
        <div className='card'>
          <img src='images/BMW logo.jpg'alt='image2'></img>
          <label><Link to="/Page2">Go To Page2</Link></label>  
        </div>
         <div className='card'>
          <img src='images/Porsche Logo.jpg'alt='image3'></img>
          <label> <Link to="/Page3">Go To Page3</Link></label>  
        </div>
        <div className='card'>
          <img src='images/rolls royce logo.jpg'alt='image3'></img>
          <label> <Link to="/Page4">Go To Page4</Link></label>  
        </div>
        <div className='card'>
          <img src='images/Mercedes logo.jpg'alt='image3'></img>
          <label> <Link to="/Page5">Go To Page5</Link></label>  
        </div>
        <div className='card'>
          <img src='images/Cadillac logo.jpg'alt='image3'></img>
          <label> <Link to="/Page6">Go To Page6</Link></label>  
        </div>
      </div>
    </>
  )
}

export default App
