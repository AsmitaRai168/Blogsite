import React,{ useState } from 'react'
import { IconName } from "react-icons/fc";

import { LoginData } from '../../DummyData/DummyData'
import "./Login.css"
const Login=()=> {
  
    const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
const [allEntry,setAllEntry]=useState([]);

	 const submitForm=(e)=>{
    e.preventDefault();
    const newEntry={email:email,password:password};

    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry)
     }

  return (
    <>
     
<div className='Login-container'>
      <div className='mainlogin-container'>
        <div className='image-form-container'>
      {LoginData.map((each,index)=>(
    <div className='image-container'>
      <figure>
        <img src={each?.image} alt="logicpic" className='login-image'/>
      </figure>

      </div>
   ))}
			<form action="" className='Form-container' onSubmit={submitForm}> 
      <h1>Log In</h1>
				<div  className="login-form-container"> 
       
					<label htmlFor="email" className='logintext-container'>Email</label><br></br>
					<input type="text" name="email" autoComplete='off'
           className="email-form"
           placeholder="enter your email..."
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> 
				</div> 
				<div> 
					<label htmlFor="password">Password</label><br></br>
					<input type="text" name="password" className="passw"
          placeholder="enter your password..."
          autoComplete='off'
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           /> 
				</div>  
				<button type="submit" ><h3>Login</h3></button>
        <label className='forgotpwd'>forgot password?</label>
        
        
        
			</form>
     </div>
      
      </div>
      
		</div>
   
  
    </>


  )
}

export default Login