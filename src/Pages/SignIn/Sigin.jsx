import React from 'react'
import { useState } from 'react';
import "./Signin.css";
import {useNavigate} from 'react-router-dom'
const Sigin=()=> {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const history=useNavigate()

  const handleSignUp=async(e)=>{
    e.preventDefault()
   const response=await fetch('http://localhost:8000/api/user/sign-up',{
      method:'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username:username,password:password,email:email})
    })
    console.log(response.status,'response')
   if(response.status===201){
    history('/login')
   }
   if(response.status===400){
    console.log(response.Response)
   }
  }

  return (
    <div> 
    <div className="signup">
      <div className="signup-main-form">
        <h2 className="form-title">Sign up</h2>
        <form className="signup-form">
       
          <div className="form-group">
           <div>
           <label >UserName:</label>
           </div>
            
          
           
           <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="enter your name..."
              className="input-form"
              onChange={(e)=>setUsername(e.target.value)}
            ></input>
         
           
          </div>
          <div className="form-group">
            <div>
            <label className="label-form">Email:</label>

            </div>
            
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="enter your email..."
              className="input-form"
              onChange={(e)=>setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <div>
            <label className="label-form">Password:</label>

            </div>
            
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="enter your password..."
              className="input-form"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <div>
            <label className="label-form">Confirm Password:</label>

            </div>
          
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="confirm your password..."
              className="input-form"
            ></input>
          </div> */}

          <div className="form-group form-button">
             <button className='btn-formgroup' onClick={handleSignUp}>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  )
}

export default Sigin
