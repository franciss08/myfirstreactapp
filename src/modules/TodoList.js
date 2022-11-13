import React from "react";
import { TaskList } from "./TaskList";
import { useState } from "react";


export const ToDoList = () => {
    const [existingTasks, setExistingTasks] = useState([]);
    const [newTask, setNewTask] = useState('')

    const addNewTask = (event) => {
        event.preventDefault();
        if (newTask === '') return;
        setExistingTasks([newTask, ...existingTasks]);
        setNewTask('');
    }

    const handleChange =(event)=> {
        const newTaskInput = event.target.value;
        setNewTask(newTaskInput);
    }

    return (
        <div>
            <form>
                <label >
                    New Task:
                    <input
                        type="text" 
                        onChange={handleChange} 
                        value={newTask} 
                        placeholder="New Task..."></input>
                </label>
                <button onClick={addNewTask}>Add task</button>
            </form>
            <TaskList 
                tasks={existingTasks}
                />
        </div>
    )
}