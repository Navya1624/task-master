import React ,{ useState} from 'react'
import '../App.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TaskForm from './TaskPlanner.js';


const DailyPlanner = () => {
    const [tasks, setTasks] = useState([]);
    //const [showForm,setShowForm]=useState(false);

    const addTask = (task) => {
        setTasks([...tasks, task]);
       // setShowForm(false);
    };

    // const toggleForm=()=>{
    //     setShowForm(!showForm);
    // }
    
    return (
        <div>
             {/* <Button variant="contained" onClick={toggleForm}>
                {showForm ? 'Cancel' : 'Add Task'}
            </Button> */}
        <TaskForm addTask={addTask} />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Task Name</TableCell>
                            <TableCell>Allotted Time</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Add</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task, index) => (
                            <TableRow key={index}>
                                <TableCell>{task.taskName}</TableCell>
                                <TableCell>{task.allottedTime}</TableCell>
                                <TableCell>{task.priority}</TableCell>
                                <TableCell>{task.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DailyPlanner;
