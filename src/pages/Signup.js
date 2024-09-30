import React, { useState } from 'react'
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Register = async () => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/register`, {
                username,
                email,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error during registration: ', error);
        }
    };
    return (
        <div>
            <TextField
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant='contained' onClick={Register}>
                Create Account
            </Button>
        </div>
    )
}

export default Signup
