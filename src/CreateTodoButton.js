import React from "react";

function CreateTodoButton(props) {

    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton("Create Todo Item")}    
        >+</button>
    )
}

export {CreateTodoButton};