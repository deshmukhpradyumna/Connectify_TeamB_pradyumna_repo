import React from 'react';
import { Helmet } from 'react-helmet';
function Login() {
  return (
    <>
    { <Helmet>
      <link rel="stylesheet" href="./css/login.module.css" /> 
    </Helmet> } 
    <div className="login-container">
      <img src="./images/logo.jpg" alt="Logo" className="logo" />
      <h1 className="app-name">Connectify</h1>
      <div className='container'>
      <h2>Login</h2>
      <form>
            <div className="txt_field"><input type="text" name="text" required /><label>Username</label></div>
            <div className="txt_field"><input type="password" name="password" required /><label>Password</label></div>
            <input name="submit" type="Submit" value="Login" />
      </form>
      <p>Not a Member? <a href="/signup">SignUp</a></p>
      <p><a href="#">Forget Password</a></p>
    </div>
    </div>
    </>
  );
}
export default Login;
