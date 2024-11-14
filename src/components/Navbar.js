import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light  bg-white">
        <Link className="navbar-brand" to="/"> News Monkey </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item"><Link rel='noreferrer' className="nav-link" to="/buisness">Buisness</Link></li>
            <li className="nav-item"><Link rel='noreferrer' className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link rel='noreferrer' className="nav-link" to="/general">General</Link></li>
            <li className="nav-item"><Link rel='noreferrer' className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link rel='noreferrer' className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link rel='noreferrer' className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link rel='noreferrer' className="nav-link" to="/technology">Technology</Link></li>
            
          </ul>

        </div>
      </nav>
    </div>

  )
}


export default Navbar











//rce  - react class based components
//rcep react class based components with proptypes




































