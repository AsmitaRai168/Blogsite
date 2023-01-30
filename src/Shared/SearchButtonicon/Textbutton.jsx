import React from 'react'
import "./Textbutton.css"
const Textbutton=({sendMessage})=> {
  return (
   <>
   <div className='sendmsg-btn-container'>
    
    <div className='send-message'>
        {sendMessage}
    </div>
    <div className='send-btn-msg'>
        <button className='sendmsg' ><h3>SendMessage</h3></button>
    </div>

   </div>
   </>
  )
}

export default Textbutton