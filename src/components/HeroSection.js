import React from 'react';
import '../App.css';
import './HeroSection.css';
import Morpher from './morpher';
import STRETCH from '../../src/images/StetchLab-Logo-Primary.jpg';
import FLORES from '../../src/images/florescompany.PNG';





function HeroSection() {
  return (
    
    <div className='omwcontainer'>
      <div>
        <Morpher />
      </div>
      <div className="imagescontainer">
        <a href="https://www.stretchlab.com/"><img className ="stretchlab" src={STRETCH} height="70px" width="50px"></img></a>
        <a href="https://www.thefloresco.com/"><img className ="thefloresco" src={FLORES} height="80px" width="100px"></img></a>
    </div>
    </div>
  );
} 

export default HeroSection;
