import React from 'react';
import { ReactDOM } from 'react';
import '../App.css';
import './HeroSection.css';
import Morpher from './morpher';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


function HeroSection() {
  return (
    
    <div className='omwcontainer'>
      <div>
        <Morpher />
      </div>
      <div className="imagescontainer">
        <a href="https://www.stretchlab.com/"><img className ="stretchlab" src="/images/StetchLab-Logo-Primary.jpg" height="70px" width="50px"></img></a>
        <a href="https://www.thefloresco.com/"><img className ="thefloresco" src="/images/florescompany.png" height="70px" width="90px"></img></a>
    
    </div>
      


   
    </div>
  );
} 

export default HeroSection;
