import React from "react";
import { TaskList } from "./TaskList";
import { useState } from "react";
// issues with check box. Can either get it to work but then one of them stays checked or can't be checked

export const ToDoList = () => {
    const [existingTasks, setExistingTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addNewTask = (event) => {
        event.preventDefault();
        if (newTask === '') return;
        const newTaskObject = {checked: false, task: newTask}
        setExistingTasks([ ...existingTasks, newTaskObject]);
        setNewTask('');
    }

    const handleChange =(event)=> {
        const newTaskInput = event.target.value;
        setNewTask(newTaskInput);
    }

    const clearCheckedTasks = () => {
        console.log('hello');
        const currentTasks = existingTasks;
        const remainingTasks = currentTasks.filter(eventObject => eventObject.checked === false);
        console.log(remainingTasks);
        setExistingTasks(remainingTasks);
    }

    const handleCheckboxToggle = (event) => {
        console.log('event',event)
        const eventIndex = event.target.id.split('_')[1];
        const currentTasks = existingTasks;
        const currentToggle = existingTasks[eventIndex].checked;
        const newToggle = !currentToggle;
        console.log('curr',currentToggle)
        console.log('before',existingTasks[eventIndex].checked);
        existingTasks[eventIndex].checked = newToggle;
        console.log('after',existingTasks[eventIndex].checked);
        setExistingTasks(currentTasks);
    }

    return (
        <div>
            <h1>To Do List! Yey!</h1>
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
                handleCheckboxToggle={handleCheckboxToggle}
                clearCheckedTasks={clearCheckedTasks}
                />
        </div>
    )
}