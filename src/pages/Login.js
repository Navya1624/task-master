import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error during sign in: ', error);
        }
    }
    return (
        <div>

        </div>
    )
}

export default Login

