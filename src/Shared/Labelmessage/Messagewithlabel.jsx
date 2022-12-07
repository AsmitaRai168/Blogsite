import React from 'react'
import "./labelwithmsg.css"
const Messagewithlabel=({LabelMessage,labelHolder,HandleLabelChange})=> {
  return (
    <>
        
        <div className='message-main-container'>
        <div className='message-sendbtn-container'>
        <div className='send-message-container'>
                {
                     LabelMessage
                }
            </div>
            <div className='input-message-container'>
                <textarea
                className="send-message"
                placeholder={labelHolder}
                onChange={HandleLabelChange} />

            </div>
           
                </div>
            

        </div>

    </>
  )
}

export default Messagewithlabel