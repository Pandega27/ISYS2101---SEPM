import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './component/LoginSignup/Login';
import { Signup } from './component/LoginSignup/Signup';
import Homepage from './component/Homepage/Homepage';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
    </Router>
  );
}

export default App;