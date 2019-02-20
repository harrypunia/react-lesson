import React from "react"

function ToDoItem(props) {
        const {id, src, alt, text, completed} = props.info;
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
                <input type="checkbox" onChange={e => props.handleChanged(id)} checked={completed} />
                <p>{text}</p>
            </div>
        )
}

export default ToDoItem