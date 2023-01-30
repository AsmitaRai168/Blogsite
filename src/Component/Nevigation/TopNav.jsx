import React from 'react'
import InputField from '../../Shared/SearchInputfield/InputField'
import { FiSearch } from "react-icons/fi";
import "./topnav.css";
import ButtonWithIcon from '../../Shared/SearchButtonicon/ButtonWithIcon';
import ButtonNav from './ButtonNav';
import NavData from '../../StaticData/NavData';

function TopNav() {
  return (
    <>
    <div className='TopNav-main-Container'>
      <div className='TopNavContainer'>

        <div className='logoContainer'>
          <h2 className='logoText'>My Blog</h2>
          </div>
<div className='search-icon-main-container'>
<div className='search-Container'>
            <InputField inputType={"text"} setPlaceholder={"Search..."}/>
            </div>
          
          <div className='icon-Container'>
          <ButtonWithIcon
           icon={<FiSearch fontSize={"large"} color="white" />}
           />
          </div>
</div>
          

          
          
          
        
      </div>

    </div>
    <div className='bottom-nav-bar'>
      <ButtonNav NavData={NavData}/>
    </div>
   
    </>
    
  )
}

export default TopNav