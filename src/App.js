import React from 'react'
import Expertise from './component/Expertise'
import Hero from "./component/Hero"
import Specializing from './component/Specializing'
import SocialConnect from './component/UI/SocialConnect'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Cards from './Projects/Cards'
import Educations from './Education/Educations'
import Footer from './footer/Footer'

const App=(props)=>{
  return(
    <div >
    <Hero/>
    <Specializing/>
    <Educations/>
    <Cards/>
    <Expertise/>
    <SocialConnect/>
    
    <Footer/>
    </div>
  )
}
export default App;