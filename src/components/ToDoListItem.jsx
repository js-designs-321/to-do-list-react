import React from "react";

function ToDoListItem(props){

    return (
        <div onClick={() => props.delete(props.id)}>
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoListItem; 