// import React, { useState } from 'react';

// const TaskForm = ({ addTask }) => {
//     const [taskName, setTaskName] = useState('');
//     const [allottedTime, setAllottedTime] = useState('');
//     const [priority, setPriority] = useState('Medium');
//     const [status, setStatus] = useState('In Progress');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addTask({ taskName, allottedTime, priority, status });
//         setTaskName('');
//         setAllottedTime('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Task Name"
//                 value={taskName}
//                 onChange={(e) => setTaskName(e.target.value)}
//                 required
//             />
//             <input
//                 type="text"
//                 placeholder="Allotted Time"
//                 value={allottedTime}
//                 onChange={(e) => setAllottedTime(e.target.value)}
//                 required
//             />
//             <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                 <option value="High">High</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Low">Low</option>
//             </select>
//             <select value={status} onChange={(e) => setStatus(e.target.value)}>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Completed">Completed</option>
//                 <option value="Pending">Pending</option>
//             </select>
//             <button type="submit">Add Task</button>
//         </form>
//     );
// };

// export default TaskForm;