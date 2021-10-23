import React from 'react';
import "./style.css";


const SocialConnect=(props)=>{
    return(
        <div className="socialconnect">
        <div className="mainsocial">
            <h2 className="follow"><span>Follow me</span></h2>
            <a href="https://www.facebook.com/profile.php?id=100007440541881">
                <img className="img" src="./facebook.png" alt="/"/> 
            </a>
            <a href="https://www.instagram.com/sanjay_yadav_7/">
                <img className="img" src="./instagram.png" alt="/"/>
             </a>
            <a href="https://mobile.twitter.com/SanjayY05956489">
                <img className="img" src="./twitter.png" alt="/"/>
             </a>
            <a href="https://www.linkedin.com/in/sanjay-yadav-9864501a2/?originalSubdomain=in">
                <img className="img" src="./linkedin.png" alt="/"/> 
            </a>
            <a href="https://github.com/Sanjay7yadav">
                <img className="img" src="./github.png" alt="/"/>
             </a>
            
            </div>
        </div>
    );
};
export default SocialConnect;