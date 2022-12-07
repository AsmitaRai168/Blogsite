import React from 'react'
import "./politicsbusiness.css"
import PoliticsData from './PoliticsData'
import {PoliticsBusinesData} from '../../DummyData/DummyData'
import Business from './Business'


function PoliticsBusiness() {
  return (
    <>
    <div className='PoliticsBusiness-Container'>
    <div className='Politics-Container'>
        <h1 className='Politiclogo'>Politics</h1>
        <PoliticsData PoliticsBusinesData={PoliticsBusinesData}/>
    </div>
    <div className='Business-Container'>
       <h1 className='businesslogo'>Business</h1>
       <Business PoliticsBusinesData={PoliticsBusinesData}/> 
    </div>
    </div>
    
    </>
  )
}

export default PoliticsBusiness