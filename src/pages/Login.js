import React, { useState } from 'react'
import { useEffect ,useRouter} from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(()=>{
        console.log("logincomponnet mounted");
        return ()=>{
            console.log("login unmount");
        }
    },[])
    const router = useNavigate();
    const SignIn = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            window.localStorage.setItem("isUserLoggedin",true);
            console.log(response.data);
        } catch (error) {
            console.error('Error during sign in: ', error);
        }
    }
    return (
        <div>
            <TextField
                placeholder='Username'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant='contained' onClick={SignIn}>
                Create Account
            </Button>
            <Button>
                go home
            </Button>
        </div>
    )
}

export default Login

