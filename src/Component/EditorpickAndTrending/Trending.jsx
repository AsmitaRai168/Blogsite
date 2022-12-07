import React from 'react'
import "./trending.css"
const Trending=({TrendingData=[]})=> {
  return (
    <>
    {TrendingData.map((each,index)=>(
        
        <div className='Trending-main-container'>
            <div className='Trending-tittle'>
                <h2 className='trentitle'>{each?.Title}</h2>

            </div>
            <div className='trending-name'>
              <h3 className='trennews'>{each?.news}</h3>
            </div>
            <div className='Trending-date'>
                <h3 className="trendate">{each?.date}</h3>

            </div>
        </div>
    ))}
    </>
  )
}

export default Trending