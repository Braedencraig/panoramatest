import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

class Burger extends React.Component {
  render () {
    return (
      <Menu right>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
        </ul>
      </Menu>
    );
  }
}

export default Burger