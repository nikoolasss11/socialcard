import React, {Component} from 'react';
import './CardFooter.css';

export default class CardFooter extends Component { 
    render(){
        return(
            <div className="footer">
                <div className="social-icons">
                    <div className="comment-icon"><i class="far fa-comment"></i><span> 2</span></div>
                    <div className="share-icon"><i class="fas fa-retweet"></i><span> 47</span></div>
                    <div className="like-icon"><i class="fas fa-heart"></i><span> 190</span></div>
                     <div className="message-icon"><i class="far fa-envelope"></i><span></span></div>   
                </div>
            </div>
        )
    }
}