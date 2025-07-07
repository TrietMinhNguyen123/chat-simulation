import './styles/SignupPage.css';
import robotImg from '../img/robot.png';

function SignupPage() {
  return (
    <div className="SignupPage">
      <div className="logo">chat simulation</div>
      <a className='login' href='#'> Login </a>
      <div className="bot-image">
        <img src={robotImg} alt="Robot" />
      </div>
      <form id="SignupForm">
        <h5>Sign Up</h5>
        <input type="text" id="username" name="username" placeholder='username' required />
        <input type="email" id="email" name="email" placeholder='email' required />
        <input type="password" id="password" name="password" placeholder='password' required />
      </form>
    </div>
  );
}

export default SignupPage;
