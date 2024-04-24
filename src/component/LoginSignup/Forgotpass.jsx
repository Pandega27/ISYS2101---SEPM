import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginSignup.css'

export const Forgotpass = () => {
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
            navigate('/');
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
                     
                        <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='input'>
                    
                        <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className='forgot-password'> Already Have Account? <span> <Link to="/login"> Log in Here!</Link></span></div>
                <div className="submit-container">
                <button type="submit" className="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};