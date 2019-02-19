import React from "react"
import ToDoItem from "./ToDoItem";

const Main = () => {
    return(
        <div>
            <h1>Checklist</h1>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
        </div>
    )
}

export default Main