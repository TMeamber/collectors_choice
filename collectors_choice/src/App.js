import React, { Component } from 'react';
import './App.css';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
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
