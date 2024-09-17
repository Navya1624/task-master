import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material';

const DailyPlanner = () => {
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false); // Track if a new row is being edited
    const [newTask, setNewTask] = useState({ taskName: '', allottedTime: '', priority: '', status: '' });

    // Handle input changes in the editable row
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    // Save the task and add to the list
    const saveTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask({ taskName: '', allottedTime: '', priority: '', status: '' });
        setIsEditing(false); // Exit edit mode
    };

    // Trigger new empty row for editing
    const addNewRow = () => {
        setIsEditing(true);
    };

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Task Name</TableCell>
                            <TableCell>Allotted Time</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task, index) => (
                            <TableRow key={index}>
                                <TableCell>{task.taskName}</TableCell>
                                <TableCell>{task.allottedTime}</TableCell>
                                <TableCell>{task.priority}</TableCell>
                                <TableCell>{task.status}</TableCell>
                                <TableCell>-</TableCell> {/* Static rows won't have an action */}
                            </TableRow>
                        ))}

                        {isEditing && (
                            <TableRow>
                                <TableCell>
                                    <TextField
                                        name="taskName"
                                        value={newTask.taskName}
                                        onChange={handleInputChange}
                                        placeholder="Enter task name"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="allottedTime"
                                        value={newTask.allottedTime}
                                        onChange={handleInputChange}
                                        placeholder="Enter allotted time"
                                    />
                                </TableCell>
                                <TableCell>
                                    <select
                                        name="priority"
                                        value={newTask.priority}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>
                                            Select Priority
                                        </option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </TableCell>
                                <TableCell>
                                    <select
                                        name="status"
                                        value={newTask.status}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>
                                            Select Status
                                        </option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                </TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={saveTask}>
                                        Save
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )}

                        {!isEditing && (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    <Button variant="contained" onClick={addNewRow}>
                                        Add
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DailyPlanner;
