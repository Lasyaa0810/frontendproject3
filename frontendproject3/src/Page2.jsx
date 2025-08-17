import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Page2.css'


export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <h1> I am proud of my country </h1>
        <Link to="/">Go to HomePage</Link>
        <br></br>
        <Link to="/Page1">Go to Page1</Link>
        <br></br> 
        <Link to="/Page3">Go to Page3</Link>
        <br></br>
        <Link to="/Page4">Go to Page4</Link>
        <br></br>
        <Link to="/Page5">Go to Page5</Link>
        <br></br>
        <Link to="/Page6">Go to Page6</Link>
      </div>
    )
  }
}
