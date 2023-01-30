import React, { useState } from 'react'
import "./lefteditor.css"
const Lefteditor=({EditorpickData=[]})=> {
   const [datas]=useState(EditorpickData.slice(0,1))
  return (
    <>
{datas.map((each,index)=>(

<div className='left-editor-container' key={index}>
    
    <figure>
        <img src={each.image}
        className="editorimage"
        alt='image5'
/>    </figure>
<div className='editdese'>
<div className='editortitle'>
    <h2>{each?.title}</h2>
</div>
<div className='deseditor'>
    <p>{each?.des}</p>
</div>
</div>

</div>

))}
    </>

  );
};

export default Lefteditor