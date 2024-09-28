import { User } from '../db/db';
const express = require('express');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cookieParser());
app.use(express.json());


app.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!(username && email && password)) {
            res.status(400).send('All fields are mandatory');
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const userDetails = await User.Create(username, email, hashedPassword);

        const token = jwt.sign({ id: userDetails._id }, 'shhhh', {
            expiresIn: "2h"
        })
        userDetails.token = token;
        res.status(201).json(userDetails);
    }
    catch (error) {
        console.error(error); 
        res.status(500).send('Server error'); 
    }
})

app.post('login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            res.status(400).send('send all data');
        }
        const userExists = await User.findOne("email");
        if (!userExists) {
            res.status(404).send('Create a account to login');
        }
        if (userExists && await bcrypt.compare(password, User.password)) {
            const token = jwt.sign(
                { id: userExists._id }, 'shhhh', {
                expiresIn: "2h"
            }
            );
            userExists.token = token;
            //send token in cookie
            const options = {
                expires : new Date(Date.now()+ 3*24*60*60*1000),
                httpOnly:true
            }
            res.status(200).cookie("token",token,options).json({
                success: true,
                token,
                userExists
            })
            res.status(201).json(userExists);
        }
        else{
            res.status(400).send('Invalid credentials');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error'); 
    }
})
export default AuthenticationRoutes;