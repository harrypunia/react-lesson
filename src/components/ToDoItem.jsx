import React from "react"

const ToDoItem = (props) => {
    console.log(props);
    //const {name, src, alt} = props;
    const styles = {
        width: 200,
        background: "#333",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div className="todo-item" style={styles}>
            <input type="checkbox"/>
            <p>Place holder for text</p>
        </div>
    )
}

export default ToDoItem