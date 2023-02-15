import React from 'react'
import "./buttonNav.css"
  import { NavLink} from "react-router-dom";
import {useState} from 'react';
export const Context=React.createContext();
const ButtonNav=({NavData})=>{
 
  return (
   
    <>
    <div className='button-main-container'>
      <div className='buttonNav-container'>
        {NavData.map((each,index)=>(
          <NavLink className={"navlinkClass"} to={each.url} key={index}>
            {each.label}
          </NavLink>
         
        ))}
              <NavLink to ="/login">
                login
              </NavLink>
              
              <NavLink to ="/Signup">Signup</NavLink>
      </div>
    </div>


    </>
  );
}

export default ButtonNav