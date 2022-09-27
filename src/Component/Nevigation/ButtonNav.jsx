import React from 'react'
import "./buttonNav.css"
import { NavLink } from "react-router-dom";


function ButtonNav({NavData}){
  
  return (
   
    <>
    <div className='button-main-container'>
      <div className='buttonNav-container'>
        {NavData.map((each,index)=>(
          <NavLink className={"navlinkClass"} to={each.url} key={index}>
            {each.label}
          </NavLink>
        ))}
      </div>
    </div>


    </>
  );
}

export default ButtonNav