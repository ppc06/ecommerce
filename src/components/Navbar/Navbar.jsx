import React from 'react';
import {Typography, Badge} from '@material-ui/core';
import { Link } from 'react-router-dom';

const PrimarySearchAppBar = ({ totalItems }) => {
  return (
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Typography component={Link} to="/auth"><img src={require("../../assets/skincarevalley.png")} alt="logo"/></Typography>
            </div>
            <nav>
              <ul id="MenuItems">
                <li><Link to="/products">SHOP ALL</Link></li>
                <li><Link to="/">SKIN TYPES</Link></li>
              </ul>
            </nav>
            <Typography component={Link} to="/"><img src={require("../../assets/user3.svg")} className="user-icon"/></Typography>
            <Typography component={Link} to="/cart"><img src={require("../../assets/bag.png")} className="cart-icon"/></Typography>
            <Typography component={Link} to="/cart">
              <Badge badgeContent={totalItems} color="secondary">
                <img src={require("../../assets/menu.png")} className="menu-icon"/>
              </Badge>
            </Typography>
          </div>
        </div>
      </div>
  );
};

export default PrimarySearchAppBar;
