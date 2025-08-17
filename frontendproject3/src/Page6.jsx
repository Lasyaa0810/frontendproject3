import React, { Component } from 'react'
import'./css/Page6.css'
export default class Page6 extends Component {
  render() {
    return (
      <>
      <div id='header'>
        <div className='logo'>
            My Project Logo
        </div>
      </div>
      <div id='section'>
        <div className='card'>
            <img src= 'images/BMW logo.jpg' alt='image1'></img>
            <label>BMW</label>
        </div>
        <div className='card'>
          <img src='images/Audi logo.jpg' alt='image2'></img>
          <label>Audi</label>  
        </div>
        <div className='card'>
          <img src='images/Porsche Logo.jpg' alt='image2'></img>
          <label>Porsche</label> 
        </div>
        <div className='card'>
          <img src='images/rolls royce logo.jpg' alt='image2'></img>
          <label>Rolls Royce</label> 
        </div>  
        <div className='card'>
          <img src='images/Mercedes logo.jpg' alt='image2'></img>
          <label>Mercedes</label> 
        </div>  
        <div className='card'>
          <img src='images/Cadillac logo.jpg' alt='image2'></img>
          <label>Porsche</label> 
        </div>    
      </div>
      <div id='footer'>Copyright @ 2025.All rights reserved.</div>
      </>
    )
  }
}