import React from 'react'
import SmallHeading from '../UI/SmallHeading';
import MediumHeading from '../UI/MediumHeading';
import Card from '../UI/Card';
import Skill from '../UI/Skill';
import "./style.css";
import{colors} from "../../style";


const Specializing =(props)=>{

    const skills=[
        {
            skillName:'HTML/CSS',
            desc:'Hands on experience in HTML/CSS',
            value:80,
            textColor:"brown",
            pathColor:'#f2a154'
        },
        {
            skillName:'JavaScript',
            desc:'Hands on experience in JavaScript',
            value:70,
            textColor:colors.primaryColor,
            pathColor:'#f9f871'
           
        },
        {
            skillName:'ReactJS',
            desc:'Hands on experience in ReactJS',
            value:70,
            textColor:colors.primaryColor,
            pathColor:'#00af154'
        },
        {
            skillName:'ExpressJS..',
            desc:'Hands on experience in ExpresJS..',
            value:60,
            textColor:colors.primaryColor,
            pathColor:'green'
        },
        {
            skillName:'NodeJS',
            desc:'Hands on experience in NodeJS',
            value:60,
            textColor:colors.primaryColor,
            pathColor:'#845ec'
        },
        {
            skillName:'Bootstrap',
            desc:'Hands on experience in Bootstrap',
            value:50,
            textColor:colors.primaryColor,
            pathColor:'#f2a154'
        },
        {
            skillName:'MYSQL',
            desc:'Hands on experience in SQL',
            value:80,
            textColor:colors.primaryColor,
            pathColor:'yellow'
        },
        {
            skillName:'Mongodb',
            desc:'Hands on experience in Mongodb',
            value:50,
            textColor:colors.primaryColors,
            pathColor:'grey'
        },
        {
            skillName:'JAVA',
            desc:'Hands on experience in Mongodb',
            value:70,
            textColor:colors.primaryColors,
            pathColor:'green'
        },
        
    ]
    return(
        <div className="container">
            <Card className="cd" style={{padding:'50px'}}>
            <div className="skill">
            <SmallHeading text="What I do"/>
            <MediumHeading text="Specializing In "/>
            <div className="flexRow wrap justify-sb" style={{padding:'30px'}}>
                {
                    skills.map((skill,index)=>(
                    <Skill
                    key={index}
                    skillName={skill.skillName}
                    desc={skill.desc}
                    value={skill.value}
                    textColor={"brown"}
                    pathColor={skill.pathColor}
                />
                
                    ))}
                    </div>
                    </div>
            
            </Card>
            
        </div>
    );
};

export default Specializing;