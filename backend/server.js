const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace <db_uri> with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a Task model
const TaskSchema = new mongoose.Schema({
    taskName: String,
    allottedTime: String,
    priority: String,
    status: String
});

const Task = mongoose.model('Tasks', TaskSchema);

// API routes
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json(newTask);
});

// Update a task by ID
app.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (err) {
        res.status(500).send('Error updating task');
    }
});

app.delete('/task/:id',async(req,res)=> {
    const {id}=req.params;
    console.log(id);
    try {
        await Task.findByIdAndDelete(id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).send('Error deleting task');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});