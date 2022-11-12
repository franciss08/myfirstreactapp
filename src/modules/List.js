import React from "react";

export const List = (props) => {
    console.log(props);
    const {previousColors} = props;
    console.log('holp',previousColors);
    const currentColor = previousColors[0];
    const oldColors = [];
    for (let i = 1; i<previousColors.length; i++) {
        oldColors.push(previousColors[i]);
    }
    return (
        <div>
            <p>Current colour is:   <strong>{currentColor}</strong></p>
            <p>Previous Colours are:</p>
            <ul>
                {oldColors.map((color,index) => <li key={index}>{color}</li>)}
            </ul>
        </div>)}