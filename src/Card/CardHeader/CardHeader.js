import React, {Component} from 'react';
import './CardHeader.css';

export default class CardHeader extends Component { 
    render(){
        return(
            <div className="header">
                <img src="https://images.unsplash.com/photo-1508131336429-d02e8d830c7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2227146ed332abb51bc71ed3d1409b6&auto=format&fit=crop&w=677&q=80" alt="" className="avatar"/>
                <div className="header-label">
                    
                    <div className="header-main-label">
                        <h1>The Practical Dev</h1>
                        <div className="header-main-label-user-date"><span> @ThePractivalDev </span><span>· Sep 10</span></div>
                    </div>

                    <div className="header-sub-label">
                        <h1 className="subtitle">Learning React? Start Small.</h1>
                    </div>

                    <div className="header-author-label">
                        <h1 className="subtitle">author: dceddia</h1>
                    </div>

                </div>
            </div>    
        )
    }
}