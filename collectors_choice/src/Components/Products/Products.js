import React, { Component } from 'react';
import './Products.css';
import Carousel from 'nuka-carousel';

export default class Products extends Component{
    render () {
        return(
            <div>
                 <div className='products'>
                 <Carousel>
                {/* <img className='' alt='' src={}/> 
                <img className='' alt='' src={}/>
                <img className='' alt='' src={}/>  
                <img className='' alt='' src={}/>  */}
                </Carousel>
                </div>
            </div>
        )
    }
}