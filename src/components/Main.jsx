import React from "react"
import ToDoItem from "./ToDoItem";
import todoData from "./data/todoData"

const Main = () => {
    const todoComponents = todoData.map(todo => <ToDoItem key={todo.id} src={todo.src} alt={todo.alt} text={todo.text} completed={todo.completed} />)
    return(
        <div>
            <h1>Checklist</h1>
            {todoComponents}
        </div>
    )
}

export default Main