import React from 'react'
import "./politics.css"
const PoliticsData=({PoliticsBusinesData=[]})=>{
  return (
    <>
    {PoliticsBusinesData.map((each,index)=>(
        <div className='politicscontainer'>
            <div className='politicmaincontainer'>
            <div className='politicsimage'>
                
                <figure>
                    <img src={each?.image} className='politicimg'
                    alt='img'/>
                </figure> </div>
                <div className='rightpolitics'>
                <div className='politcstitle'>
                    <h1 className='politictitle'>{each?.titles}</h1>
                </div>
                <div className='politicsdes'>
                  <p className='desp'>{each?.desp}</p>
                </div>
                <div className='politicsdate'>
                    <h3 className='polidate'>
                        {each?.date}
                    </h3>
                </div>
           
                </div>
                

        </div>

            </div>
            
    ))}
    
    </>
  );
};

export default PoliticsData