import React from "react";
import { Task } from "./Task";

export const TaskList = (props) => {
    const { tasks, handleCheckboxToggle, clearCheckedTasks } = props;
    
    return (
        <div>
            <h3>Task List</h3>
            <ul>
            {tasks.map((task,index) => <Task 
                key={index} 
                task={task.task} 
                taskNumber={index + 1}
                checkedValue={task.checked}
                handleCheckboxToggle={handleCheckboxToggle} />)}
            </ul>
            <button onClick={clearCheckedTasks}>Clear checked tasks</button>
        </div>
    )
}