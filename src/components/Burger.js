import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class Burger extends React.Component {
  render() {
    return (
      <Menu right>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/guided">Guided Tour</Link>
          </li>
          <li>
            <Link to="/self-guided">Self Guided Tour</Link>
          </li>
        </ul>
      </Menu>
    );
  }
}

export default Burger;
