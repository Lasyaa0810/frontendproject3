import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Page2.css'


export default class Page1 extends Component {
  render() {
    return (
      <div>
      <div  className='main1'>
        <h1> India is my country </h1>
        <Link to="/">Go to HomePage</Link>
        <br></br>
        <Link to="/Page2">Go to Page2</Link> 
      <div id="text1">
           <h2> I am lasya</h2>
      </div>
      <div className='link1'>
        <h3>this is fe class</h3>
      </div>
      </div>
      </div>
    )
  }
}
