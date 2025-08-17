import React, { Component } from 'react'
import './css/Page3.css'
import { Link } from 'react-router-dom'

export default class Page3 extends Component {
  render() {
    return (
      <div className='content'>
        <div className='header'>
          header
        </div>
      <div className='body'>
      body
      <div>
        <Link to="/">Go to HomePage</Link>
        <br></br>
        <Link to="/Page1">Go to Page1</Link>
        <br></br>
        <Link to="/Page2">Go to Page2</Link>
        <br></br>
        <Link to="/Page4">Go to Page4</Link>
        <br></br>
        <Link to="/Page5">Go to Page5</Link>
        <br></br>
        <Link to="/Page6">Go to Page6</Link>
     </div>
     </div>
      <div className='footer'>
        footer
      </div>
      </div>
    )
  }
}
