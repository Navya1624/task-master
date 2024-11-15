import express from 'express';
import Task from '../models/task.js'
import { verifyToken } from '../middlewares/authentication.js';

const router = express();

router.get('/tasks', verifyToken, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user._id });

        res.json(tasks);
    }
    catch (err) {
        res.status(500).send('Error fetching tasks');
    }
});

router.post('/tasks', verifyToken,async (req, res) => {
    console.log("post reached",req.body);
    const newTask = new Task({ ...req.body, user: "66fb1a20f9d92138d5979872" });
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

router.delete('/tasks/:id', async (req, res) => {
    try {
        const response = await Task.findOneAndDelete({_id: req.params.id});
        if (!response) {
            return res.status(404).json({ error: 'Task not found or unauthorized' });
        }
        res.json({ message: 'Task deleted' });
    } catch (err) {
        console.log("catch re")
        res.status(500).send('Error deleting task');
    }
});

export default router;