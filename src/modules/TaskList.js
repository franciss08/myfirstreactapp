import React from "react";
import { Task } from "./Task";
import { useState } from "react";

export const TaskList = (props) => {
    const {tasks} = props;

    const [childData, setChildData] = useState();

    const getChildData = (data) => {
        setChildData(data);
    }

    return (
        <div>
            <p>Task List</p>
            <ul>
            {tasks.map((task,index) => <Task key={index} task={task} taskNumber={index + 1} passData={getChildData}/>)}
            </ul>
            <button>Clear checked tasks</button>
        </div>
    )
}