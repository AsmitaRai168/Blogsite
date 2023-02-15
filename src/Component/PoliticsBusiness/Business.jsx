import React from 'react'
import "./business.css"
 const Business=({PoliticsBusinesData=[]})=> {
  return (

<>
{PoliticsBusinesData.map((each,index)=>(
    <div className='business-main-container'>
        <div className='business-container'>
            <div className='businessimage'>
                <figure>
                    <img src={each?.image}
                    className="businessimage"
                    alt="imag" />
                </figure>
            </div>
           

            
            <div className='rightbusiness'>
            <div className='businesstitle'>
                <h1 className='btitle'>{each?.titles}</h1>
            </div>
            <div className='businessnews'>
                <p className='bdesp'>{each?.desp}</p>
            </div>
            <div className='businessate'>
                <h3 className='bdate'>{each?.date}</h3>
            </div></div></div>
            
        </div>
   
))
    

}    
</> 
 );
}; 
export default Business;
