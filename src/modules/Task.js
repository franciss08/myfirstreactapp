import React from "react";
import { useState } from "react";

export const Task = (props) => {
    console.log(props);
    const {task} = props;
    const {taskNumber} = props;
    const {passData} = props;

    const [checked, setChecked] = useState(false);

    const handleCheckboxToggle = event => {
        console.log(event);
        //passData({taskNum: task, checkedStatus: !checked});
        //setChecked(!checked);
        
    }

    //can't seem to get checkbox to link to the actual item, it follows when 
    return (
        <li>
            <label><strong>Task {taskNumber}: </strong>{task}  <input type="checkbox" id={`checkbox${taskNumber}`}onChange={handleCheckboxToggle}/></label>
        </li>
    )
}