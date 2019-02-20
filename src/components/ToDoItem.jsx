import React from "react"

const ToDoItem = props => {
    console.log(props);
    const {src, alt, text, completed} = props;
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
            <img src={"resources/img/" + src} alt={alt}/>
            <input type="checkbox" checked={completed} />
            <p>{text}</p>
        </div>
    )
}

export default ToDoItem