import React, { Component } from 'react';
import './Home.css';
import Collectors from '../../Assets/choice_wo.jpg'

export default class Home extends Component{
    render () {
        return(
            <div>
          <div className="CC_Logo">
          <img className="Choice_wo" alt="" src={Collectors} />
          </div>
            </div>
        )
    }
}