import robotImg from '../img/robot.png'
import googleImg from '../img/icon_1.png'
import { Link, useNavigate } from 'react-router-dom';
import ContinueButton from '../component/ContinueButton';
import {AuthLogin} from '../utility/LoginUser';
import {motion} from "framer-motion";
function LoginPage() {
    const navigate = useNavigate()

    function handleLoginSubmit(event){
      event.preventDefault();
      const username = document.getElementById("username_email")?.value;
      const password = document.getElementById("password")?.value;
  
      if(!username || !password){
          return;
      }
    
      AuthLogin(username, password, navigate);
  }

    return (
      <div className="Page">
        <div className="logo">Chat simulation</div>
        <Link draggable="false" to="/signup" className='signup'> Sign Up </Link>
        <Link draggable="false" to="/chatbot" className='test'> Testing </Link>
        <motion.div
        initial={{ opacity: 0,y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.4, ease: "easeOut"}}
        className="bot-image">
          <img src={robotImg} alt="Robot" draggable="false" />
        </motion.div>
        <motion.form
        initial={{ opacity: 0,y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.4, ease: "easeOut"}}
        id="Form" onSubmit={handleLoginSubmit}>
          <h5>Login:</h5>
          <input type="text" id="username_email" name="username_email" placeholder='username or email' required />
          <input type="password" id="password" name="password" placeholder='password' required />
          <img className='loginIcon' src={googleImg} draggable="false" href="#"></img>
          <ContinueButton></ContinueButton>
        </motion.form>
      </div>
    );
  }
  
  export default LoginPage;
  