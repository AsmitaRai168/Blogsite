import React from 'react'


import "./EditorTrending.css"
const EditorpickAndTrending=({EditorpickData})=> {
    
  return (
    <>
      
          {EditorpickData.map((each,index)=>(
            <div className='editor-main-container'>
            
              <div className='left-container'>
               
              <div className='editor'>

                <div className='left-editor'>
                <h1>Editor's Pick</h1>
                <figure>
                      <img
                        src={each.image}
                        className="imagefromeditor"
                        alt="image"
                      />
                    </figure>
                              
                            
                      <h3 className='title1'>{each?.imagelabel}</h3>
                   
                   
                      <p className='deseditor'>{each?.details}</p>
                    
                </div>
                <div className='right-editor'>
                <figure>
                      <img
                        src={each.image}
                        className="imagefromeditor1"
                        alt="image"
                      />
                    </figure>
                              
                            
                      <h3 className='title1'>{each?.imagelabel}</h3>
                   
                   
                    
                    
                </div>


                </div>
               </div>


              <div className='right-container'>
                <h1>Trending</h1>
              </div>

                
           
            </div>
              
          ))}
        
    </>
  )
}

export default EditorpickAndTrending;