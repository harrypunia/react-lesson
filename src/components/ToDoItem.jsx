import React from "react"

const ToDoItem = (props) => {
    const {name, src, alt} = props.info;
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
            <input type="checkbox"/>
            <p>{name}</p>
        </div>
    )
}

export default ToDoItem