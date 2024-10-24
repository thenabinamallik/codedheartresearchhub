import React, { useState } from "react";
import { ReactComponent as Lock } from '../../res/lock.svg';
import { ReactComponent as Username } from '../../res/username.svg';
import { ReactComponent as Mail } from '../../res/mail.svg';

import "./Auth.css"; 
const Auth = () => {
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const handleRegisterClick = () => {
    setIsRegisterActive(true);
  };

  const handleLoginClick = () => {
    setIsRegisterActive(false);
  };

  return (
    <div className={`container ${isRegisterActive ? "active" : ""}`}>
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>

      <div className="form-box Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>Login</h2>
        <form action="#">
          <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
            <input type="text" required />
            <label>Username</label>
            <Username className="box-icon" height="20" width="20"/>
          </div>

          <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
            <input type="password" required />
            <label>Password</label>
            <Lock className="box-icon" height="20" width="20"/>
          </div>

          <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
            <button className="btn" type="submit">Login</button>
          </div>

          <div className="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
            <p>
              Don't have an account? <br />
              <span className="SignUpLink" onClick={handleRegisterClick}>Sign Up</span>
            </p>
          </div>
        </form>
      </div>

  
      <div className="info-content Login">
        <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>WELCOME BACK!</h2>
        <p className="animation" style={{ "--D": 1, "--S": 21 }}>
          We are happy to have you with us again. If you need anything, we are here to help.
        </p>
      </div>

      <div className="form-box Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>Sign Up</h2>
        <form action="#">
          <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
            <input type="text" required />
            <label>Username</label>
            <Username className="box-icon" height="20" width="20"/>
          </div>

          <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
            <input type="email" required />
            <label>Email</label>
            <Mail className="box-icon" height="20" width="20"/>
          </div>

          <div className="input-box animation" style={{ "--li": 19, "--S": 3 }}>
            <input type="password" required />
            <label>Password</label>
            <Lock className="box-icon" height="20" width="20"/>
          </div>

          <div className="input-box animation" style={{ "--li": 20, "--S": 4 }}>
            <button className="btn" type="submit">Register</button>
          </div>

          <div className="regi-link animation" style={{ "--li": 21, "--S": 5 }}>
            <p>
              Already have an account? <br/>
              <span  className="SignInLink" onClick={handleLoginClick}>Sign In</span>
            </p>
          </div>
        </form>
      </div>
      <div className="info-content Register">
        <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>WELCOME!</h2>
        <p className="animation" style={{ "--li": 18, "--S": 1 }}>
          We’re delighted to have you here. If you need any assistance, feel free to reach out.
        </p>
      </div>
    </div>
  );
};

export default Auth;
