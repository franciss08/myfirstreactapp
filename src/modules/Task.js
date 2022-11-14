import React from "react";

export const Task = (props) => {
    const {task, taskNumber, checkedValue, handleCheckboxToggle} = props;

    return (
        <li>
            <label><strong>Task {taskNumber}: </strong>{task}  <input
                type="checkbox" 
                id={`index_${taskNumber - 1}`} 
                onChange={handleCheckboxToggle}
                checked={checkedValue}
                /></label>
        </li>
    )
}