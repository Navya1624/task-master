import express from 'express';
import Task from '../models/task.js'
import { verifyToken } from '../middlewares/authentication.js';

const router = express();

router.get('/tasks', verifyToken, async (req, res) => {
    console.log("work");
    try {
        const tasks = await Task.find({ userId: req.user._id });

        res.json(tasks);
    }
    catch (err) {
        res.status(500).send('Error fetching tasks');
    }
});

router.post('/tasks', verifyToken, async (req, res) => {
    const newTask = new Task({ ...req.body, userId: req.user._id });
    await newTask.save();
    res.json(newTask);
});

// Update a task by ID
router.put('/tasks/:id', verifyToken, async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, req.body, { new: true });
        res.json(task);
    } catch (err) {
        res.status(500).send('Error updating task');
    }
});

router.delete('/task/:id', async (req, res) => {
    try {
        await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).send('Error deleting task');
    }
});

export default router;