import React from 'react';
import Button from '../UI/Button';
import './index.css';

const Hero=(props)=>{
    return(
        <div className="container" style={{marginTop:"70px"}}>
        <marquee behavior="alternate"><h1 style={{color:"red",fontFamily:"Serif", textShadow:"3px 3px 2px green"}}>WELCOME</h1> </marquee>
        
        
            <div className="flexRow justify-sb align-center">
                <div className="back">
                    <p className="uppercase bold-500 mtb-10"><span  className="primaryColor">Hello,</span> I am Sanjay Yadav</p>
                    <h1 className="textColor ls-1 mtb-10">Software developer</h1>
                    <p className="font-12 grey mtb-10">MERN Developer in Bangalore </p>
                    <div className="flexRow" style={{margin:'30px 0px'}}>
                        <div className="hire">
                            <Button  label="Hire Me"/>
                            <Button label="Download CV" inverse={true}/>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
        </div>
        </div>
    )
}
export default Hero;