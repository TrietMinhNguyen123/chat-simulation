import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ChatBot from './pages/ChatBot';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/chatbot' element={<ChatBot/>} />
    </Routes>
  );
}

//some rankdom change

export default App;
