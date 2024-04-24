import React, { useState, useEffect } from 'react';
import { decodeJWT } from '../utils/decodeJWT'; 
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Hompage.css'

const Homepage = () => {
    const [balance, setBalance] = useState(0);
    const [username, setUsername] = useState('');




    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            const user = decodeJWT(token);
            if (user && user.username) {
                setUsername(user.username); 
                fetchBalance(token);
            } else {
                console.log('Username not found in JWT');
            }
        }
    }, []);

    const fetchBalance = async (token) => {
        try {
            const response = await fetch('http://localhost:5000/api/income/balance', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setBalance(data.balance);
            } else {
                throw new Error(data.message || 'Unable to fetch balance');
            }
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };

    return (
        <div>
            <Navbar/>

    <div className='option'> 
        <div class="balance">
          <div class="about-col">
            <h3>Account Balance $</h3>
            <h2> $3.000.000,-</h2>
            <div className='button'><Link to=""> Check Details ! </Link></div>
          </div>
          <div class="about-col">
            <h3>Monthly Spending $ </h3>
            <h2> $1.200.000,-</h2>
            <div className='button'><Link to="/login"> Check Details ! </Link></div>
          </div>
          <div class="about-col">
            <h3>Bill Reminder $ </h3>
            <div className='button'><Link to="/login"> Check Bill Details !</Link></div>
          </div>
        </div>
    </div>
</div>
    );
};

export default Homepage;