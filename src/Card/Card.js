import React, {Component} from 'react';
import CardBody from './CardBody/CardBody.js';
import CardFooter from './CardFooter/CardFooter.js';
import CardHeader from './CardHeader/CardHeader.js';
import './Card.css';


export default class Card extends Component { 
    render(){
        return(
            <div className="main-component">
                <CardHeader/>
                <CardBody/>
                <CardFooter/>
            </div>   
        )
    }
}