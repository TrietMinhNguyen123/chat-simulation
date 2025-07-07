import { Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
