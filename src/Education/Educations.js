import React from 'react';

import School from './School';
import College from './College';
import Company from './Company';
import { Component } from 'react';
import './style.css';

class Educations extends Component{
    render(){
        return(
            <div className="cd">
                <div className="container-fluid d-flex justify-content-center ">
                    <div className="row">
                            <div className="col-md-4">
                                <Company/>
                            </div>
                            <div className="col-md-4">
                                <College/>
                            </div>
                            <div className="col-md-4">
                                <School/>
                            </div>
                            
                    </div>
                </div>
            </div>
        );
    }
}
export default Educations;