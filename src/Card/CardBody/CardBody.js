import React, {Component} from 'react';
import './CardBody.css';

export default class CardBody extends Component { 
    render(){
        return(
            <div className="main-content">
                <div className="image-container">
                    <img src="https://images.unsplash.com/photo-1522198734915-76c764a8454d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7892e6f709c6e46512bb4b08ce3d1a3c&auto=format&fit=crop&w=1350&q=80" alt="" className="main-image"/>    
                <div className="image-caption">
                        <h1 className="image-caption-title">Learning React? Start Small.</h1>
                        <h1 className="image-caption-subtitle">Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</h1>
                    </div>
                </div>

               
            </div>
        )
    }
}