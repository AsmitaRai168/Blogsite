import React, { useState } from "react";
import { IconName } from "react-icons/fc";
import loginImage from "../../Assests/logpic.png";

import { LoginData } from "../../DummyData/DummyData";
import "./Login.css";
const Login = ({ setLoginImage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const data={
      email:email,
      password:password
    }
   const response=  fetch("http://localhost:8000/api/user/sign-in", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({data}),
    });
    console.log(response,'response')
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
                  name="email"
                  autoComplete="off"
                  className="email-form"
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
              <button type="submit">Login</button>
              <label className="forgotpwd">forgot password?</label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
