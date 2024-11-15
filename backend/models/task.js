import mongoose from 'mongoose'
const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    allottedTime: String,
    priority: String,
    status: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const Task = mongoose.model('Tasks', TaskSchema);
export default Task;