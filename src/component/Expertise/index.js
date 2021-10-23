import React from 'react';
import MediumHeading from '../UI/MediumHeading';
import SmallHeading from '../UI/SmallHeading';
import Card from '../UI/Card';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { colors } from '../../style';
import sanjay from "../../logo/images/me-right.jpg";
import './style.css';

const percentage=70; 

const Expertise=(props)=>{
    return(
    
        <div className="container" style={{marginTop:'50px'}}>
            <div className="rightImMeConatiner">
                <img   src={sanjay} alt=""/>
            </div>
            <div className="exper">
                <SmallHeading text="Expertise"/>
                <MediumHeading text="Special Skills"/>
                </div>
                    <Card className="excard" style={{padding:'30px',width:'320px',}}>
                    <div className="flexRow align-center">
                    <div style={{width:'80px',heigh:'80px'}}>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                        textColor: colors.primaryColor,
                        pathColor: colors.primaryColor,
                        })}
                    />
                    </div>
                    <h2 className="textColor mlr-10">Development</h2>
                </div>
                <p className="text-warning mtb-10 font-14">JavaScript is one of the greatest programming langauage</p>

                    <div>
                        
                    </div>

                </Card>
            
        </div>
    );
};
export default Expertise;