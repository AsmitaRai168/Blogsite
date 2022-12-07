import React from 'react'
import { useState } from 'react';
import "./righteditor.css"
const RightEditor=({EditorpickData=[]})=> {
    const [data]=useState(EditorpickData.slice(1))
  return (
    <>
     {data.map((each,index)=>(
    <><div className='right-editor-container'>
             <div className='main-right-container'>
                 <div className='right-figure'>
                     <figure>
                         <img src={each.image}
                             className="rightimage"
                             alt='images' />
                     </figure>

                 </div>
                 <div className='right-title'>
                     <h3>{each?.title}</h3>
                 </div>
             </div>
         </div></>

))}
    </>
   
  );
};

export default RightEditor