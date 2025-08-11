import React from 'react';
import './styles/form.css';
import robotImg from '../img/robot.png';
import { Link, useNavigate } from 'react-router-dom';
import ContinueButton from '../component/ContinueButton';
import { CheckUserExist } from '../utility/SignupUser';

function SignupPage() {
  const navigate = useNavigate();

  function handleSignupSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username")?.value;
    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    if(!username || !email || !password){
        return;
    }
  
    CheckUserExist(username, email, password, navigate);
}
  return (
    <div className="Page">
      <div className="logo">chat simulation</div>
      <Link to="/" draggable="false" className='login'> Login </Link>
      <div className="bot-image">
        <img src={robotImg} alt="Robot" />
      </div>
      <form id="Form" onSubmit={handleSignupSubmit}>
        <h5>Sign Up:</h5>
        <input type="text" id="username" name="username" placeholder='username' required />
        <input type="email" id="email" name="email" placeholder='email' required />
        <input type="password" id="password" name="password" placeholder='password' required />
        <ContinueButton />
      </form>
    </div>
  );
}

export default SignupPage;
