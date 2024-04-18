import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import user_icon from '../assets/profile.png';
import password_icon from '../assets/password.png';

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
            alert('User registered successfully! Please log in.'); 
            navigate('/login');
        } else {
            alert(data.message); 
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'> Sign Up </div>
                <div className='underline'></div>
            </div>
            <form onSubmit={handleSignup}>
                <div className='inputs'>
                    <div className='input'>
                        <img src={user_icon} alt=''/>
                        <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt=''/>
                        <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};
