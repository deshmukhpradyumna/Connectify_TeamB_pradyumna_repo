import React from 'react';
import { Helmet } from 'react-helmet';
function Signup() {
  const newLocal = '#';
  return (
    <>
    { <Helmet>
      <link rel="stylesheet" href="./css/signup.module.css" /> 
    </Helmet> } 
    <div className="App">
      <div className="form-container">
        <img src="./images/logo.jpg" alt="Connectify Logo" className="logo" />
        <h1 className="app-name">Connectify</h1>
        <div className='container'>
          <h2>Signup</h2>
          <form>
            <div className="txt_field"><input type="text" name="text" required /><label> Email or Phone Number </label></div>
            
            <div className="txt_field"><input type="text" name="text" required /><label>Username</label></div>
            <div className="txt_field"><input type="password" name="password" required /><label>Password</label></div>
            <input name="submit" type="Submit" value="Sign Up" />
          </form>
          <button className="login-button"> <a href="./login"> Go to Login</a></button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
