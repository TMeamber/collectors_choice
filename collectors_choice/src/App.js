import React, { Component } from 'react';
import './App.css';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import { Route, Link } from 'react-router-dom';
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";


class App extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="App">
      <div className="NBar">
        <div className="Hamburger_Button">
          <div className="menu-button" onClick={this.handleToggle}>
            <div className="Hamburger" />
            <div className="Hamburger" />
            <div className="Hamburger" />
          </div>
        </div>
        <div>
          <Drawer
            docked={false}
            width={300}
            open={this.state.open}
            openSecondary={true}
            onRequestChange={open => this.setState({ open })}
            containerClassName="drawer"
          >
            <a href="/">
              <MenuItem onClick={this.handleClose} className="menu-item">
                Home
              </MenuItem>
            </a>
            <a href="/About">
              <MenuItem onClick={this.handleClose} className="menu-item">
                About Us
              </MenuItem>
            </a>
            <a href="/Contact">
              <MenuItem onClick={this.handleClose} className="menu-item">
                Contact Us
              </MenuItem>
            </a>
            <a href="/Products">
              <MenuItem onClick={this.handleClose} className="menu-item">
                Products
              </MenuItem>
            </a>
          </Drawer>
        </div>
      </div>
      <div className="navbar">
        <Link to='/'>
        <div className='Hm'>Home</div>
        </Link>
        <Link to='/Products'>
        <div className='Prod'>Products</div>
        </Link>
        <Link to='/About'>
        <div className='About'>About Us</div>
        </Link>
        <Link to='/Contact'>
        <div className='Contact'>Contact Us</div>
        </Link>
        </div>
        <div className='routes'>
        <Route exact path='/' component={Home}/>
        <Route path='/Products' component={Products}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>
        </div>
        </div>
    );
  }
}

export default App;
