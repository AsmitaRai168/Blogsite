import React from 'react'
import "./EditorTrending.css"
import {EditorpickData,TrendingData} from '../../DummyData/DummyData'
import Lefteditor from './Lefteditor';
import RightEditor from './Righteditor';
import Trending from './Trending';

const EditorpickAndTrending=()=>{

  return (
    <>
  <div className='EditorTrending-container'>
    <div className='left-container'>
      <h1 className='lefteditorlogo'>Editor pick</h1>
      <div className='editor-post'>
      <div className='left-editor-container'>
        
        <Lefteditor EditorpickData={EditorpickData}/>
      </div>
      <div className='right-editor-container'>
        
        <RightEditor EditorpickData={EditorpickData}/>
      </div></div>
    </div>
    <div className='right-container'>
      <h1>Trending</h1>
      <Trending TrendingData={TrendingData}/>
    </div>
  </div>
  
 
    </>
 );
};

export default EditorpickAndTrending