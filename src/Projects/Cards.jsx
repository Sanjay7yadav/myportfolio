import React from 'react';

import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import { Component } from 'react';
import './style.css';

class Cards extends Component{
    render(){
        return(
            <div className="cd">
            {/* <h1 className="project">Project</h1> */}
            <marquee behavior="alternate"><h1 style={{color:"red",fontFamily:"Serif", textShadow:"3px 3px 2px green"}}>PROJECT</h1> </marquee>
                <div className="container-fluid d-flex justify-content-center ">
                    <div className="row">
                            <div className="col-md-4">
                                <Project1/>
                            </div>
                            <div className="col-md-4">
                                <Project2/>
                            </div>
                            <div className="col-md-4">
                                <Project3/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cards;