import React from 'react';
import { ReactComponent as Logo } from '../../res/user.svg';
import './Header.css'

export default function Header() {
  return (
    <div className='body'>
      <div className="logospace">
        <h1 className="Description">CodedHeart</h1>
      </div>
      <div className="remainspace">
        <ul>
          <li>
            Home
          </li>
          <li>
            Product
          </li>
          <li>
            Careers
          </li>
          <li>
            Contact
          </li>
        </ul>
        <div className='btns'>
        <button className="loginbtn">
          <Logo width="30" height="20" />
          <span>Log In</span>
        </button>
        <button className='getstartedbtn'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
