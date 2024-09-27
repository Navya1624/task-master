import React, { useState } from 'react'
import axios from 'axios';
import { TextField, Button } from '@mui/material'

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Register = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/register`, {
        username,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error during registration: ', error);
    }
  };

  const SignIn = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error during sign in: ', error);
    }
  }
  return (
    <div>
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
                    Register
                </Button>
                <Button variant='contained' onClick={SignIn}>
                    Sign In
                </Button>
            </div>
        </div>
  )
}

export default Authentication
