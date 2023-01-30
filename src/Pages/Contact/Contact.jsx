import React from 'react'
import Labelinput from '../../Shared/Labelinput/Labelinput'
import Messagewithlabel from '../../Shared/Labelmessage/Messagewithlabel'
import Textbutton from '../../Shared/SearchButtonicon/Textbutton'
import "./contact.css"
function Contact() {
  return (
    <>
    <div className='contact-headrer'>
    <h4 className='contact-logo'>Contact Us</h4>
    </div>
    <div className='contact-detail-form-container'>
      
      <div className='firstname-container'>
     <Labelinput LabelName={"First name"} Type ="  TEXT" labelHolder={"enter your first name..."} 
     
     />

     

     </div>
     <div className='lastname-container'>
     <Labelinput LabelName={"Last name"}  Type="TEXT" labelHolder={"enter your last name..."}/>

     </div>
      
      
      <div className='email-container'>
     <Labelinput LabelName={"Email Address"}  Type="email" labelHolder={"enter your email address..."}/>
     </div>
      
      <div className='tel-num-container'>
      <Labelinput LabelName={"Tel. Number"}  Type="number" labelHolder={"enter your number..."}/>

      </div>
      </div>
      
    
     <div className='send-msg-container'>
     <Messagewithlabel LabelMessage={"Message"} Type="text" labelHolder={"Write Something..."}/>
     </div>

    <Textbutton   Type="submit"  />

    <div className='text'><h4>thank you for visiting our website</h4></div>

    </>
    
  )
}

export default Contact