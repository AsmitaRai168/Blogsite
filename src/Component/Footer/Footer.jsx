import React from 'react'
import InputField from '../../Shared/SearchInputfield/InputField';
import ButtonWithIcon from '../../Shared/SearchButtonicon/ButtonWithIcon';
import {FaTelegramPlane} from "react-icons/fa"
import "./footer.css"
const Footer =()=> {
  return (
    
    <div className='footermaincontainer'>
        <div className='newscontainer'>
         <h2>NewsLetter Subscribe</h2>
         <p className='desnews'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
        </div>
        <div className='emailcontainer'>
           <div><InputField inputType={"email"} setPlaceholder={"enter email..."}/>
           <ButtonWithIcon icon={<FaTelegramPlane color="white" fontSize={"large" }/>}  />

           </div> 
          
          
          
         
   
        </div>
    </div>
);
};

export default Footer