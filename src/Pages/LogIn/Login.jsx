import React, { useState} from "react";
import {useNavigate} from 'react-router-dom'

import loginImage from "../../Assests/logpic.png";

import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const navigate=useNavigate()
  const submitForm =async(e) => {
   
    e.preventDefault();
    
   const response=await  fetch("http://localhost:8000/api/user/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({email:email,password:password}),
    })
     console.log( response.status,'response')
    
   
     if(response.status===200){
      navigate('/')
     }
    
    

  
   
  };
  

  return (
    <>
    
      <div className="Login-container">
        <div className="mainlogin-container">
          <div className="image-form-container">
            <div className="image-container">
              <figure>
                <img src={loginImage} alt="logicpic" className="login-image" />
              </figure>
            </div>

            <form action="" className="Form-container" onSubmit={submitForm}>
              <h1>Login</h1>
              <div className="login-form-container">
                <label htmlFor="email" className="logintext-container">
                  Email
                </label>
                <br></br>
                <input
                  type="text"
                  name="Email"
                  autoComplete="off"
                  className="EmaiL-form"
                  placeholder="enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <br></br>
                <input
                  type="password"
                  name="password"
                  className="passw"
                  placeholder="enter your password..."
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="Button-login" onClick={submitForm} >Login</button>
              <label className="forgotpwd">forgot password?</label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
