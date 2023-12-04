import './styles/App.css'
import Button from './components/Button';
import InputBox from "./components/InputBox";
import DescriptionBox from "./components/DescriptionBox";
//import React, {useState} from 'react';

function log(){
  console.log("jay")
}
<Button content='click' clickHandler={log}/>

function App() {
  const nameHeading = 'namHeading'
  const emailHeading = 'emailHeading';
  const numHeading = 'numHeading';
  const LocationHeading = 'LocationHeading';

  const profSummary = 'profSummary';
  const educationPara = 'educationPara';
  const skillsPara = 'skillsPara';
  const experiencePara = 'experiencePara';


  return (
    <div className='container'>
      <div className='sidePanel'>
        <div id="card">
          <h1 id="nameHeading" className="white-font">Person Details</h1>
          <InputBox component = {nameHeading} contentHeading = "Full Name" inputPlaceholder = "Enter Name"></InputBox>
          <InputBox component = {emailHeading} contentHeading = "Email" inputPlaceholder = "Enter Email"></InputBox>
          <InputBox component = {numHeading} contentHeading = "Number" inputPlaceholder = "Enter Number"></InputBox>
          <InputBox component = {LocationHeading} contentHeading = "Location" inputPlaceholder = "Enter Location"></InputBox>
        </div>

        <div id="card">
          <h1 id="nameHeading" className="white-font">Professional summary</h1>
          <InputBox component = {profSummary} contentHeading = "Summary" inputPlaceholder = "Enter summary"></InputBox>
        </div>

        <div id="card">
          <h1 id="nameHeading" className="white-font">Education</h1>
          <InputBox component = {educationPara} contentHeading = "Summary" inputPlaceholder = "Enter summary"></InputBox>
        </div>

        <div id="card">
          <h1 id="nameHeading" className="white-font">Skills</h1>
          <InputBox component = {skillsPara} contentHeading = "Summary" inputPlaceholder = "Enter summary"></InputBox>
        </div>

        <div id="card">
          <h1 id="nameHeading" className="white-font">Experience</h1>
          <InputBox component = {experiencePara} contentHeading = "Experience" inputPlaceholder = "Enter experience"></InputBox>
        </div>


      </div>
      
      <div className='content-page'>
        <div className='header'>
          <h1 className='headerHeadings' id= {LocationHeading}>Melb</h1>
          <h1 className='headerHeadings ' id= {numHeading}>0442867199</h1>
          <h1 className='headerHeadings ' id= {emailHeading}>jamesbark@gmail.com</h1>
          
          
        </div>
  
        <div className='resume-content'>
          <h1 className='name' id= {nameHeading}>James Bark</h1>
          <div className='content-box'>
            <h3 className='content-heading' >PROFESSIONAL SUMMARY</h3>
            <p id= {profSummary}>*SUMMARY HERE*</p>
          </div>

          <div className='content-box'>
            <h3 className='content-heading'>Education</h3>
            <p id= {educationPara}>*Education here*</p>
          </div>

          <div className='content-box'>
            <h3 className='content-heading'>Skills</h3>
            <p id= {skillsPara}>*Skills here*</p>
          </div>

          <div className='content-box'>
            <h3 className='content-heading'>Experience</h3>
            <p id= {experiencePara}>*Experience here*</p>
          </div>

        

          

        </div>

      </div>
    </div>
  )
}

export default App