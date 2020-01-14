import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <div className="grid">
        <div className="start">
          <a href="/">Home</a>
        </div>
        <div className="end">
          {props.user.nickname ? (
            <span className="nickname">
              <i className="far fa-user"></i>
              {props.user.nickname} 
            </span>
          ):(
            <React.Fragment>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </React.Fragment> 
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;