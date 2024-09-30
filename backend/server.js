import authenticationRoutes from './Routes/Authentication.js'
import dailyplanner from './Routes/dailyplanner.js'
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser'



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace <db_uri> with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/auth', authenticationRoutes);
app.use('/api/dailyplanner',dailyplanner);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});