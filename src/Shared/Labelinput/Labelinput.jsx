import React from 'react'
import "./labelinput.css"
const Labelinput=({LabelName,InputType,labelHolder,handleLabelChange})=> {
  return (
    <>
    <div className='labelinput-main-container'>
        <div className='labelinput-container'>
            <div className='label-detail-container'>
                <label>
                    {
                        LabelName
                    }

                </label>
            </div>
            <div className='input-detail-container'>
                
                <input type={InputType} className="contact-field" placeholder={labelHolder} onChange={handleLabelChange} />
               
            </div>
            <div>
          
      </div>
           
        </div>
        
    </div>
    </>
  )
}

export default Labelinput