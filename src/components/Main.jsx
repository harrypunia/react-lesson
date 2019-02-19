import React from "react"
import ToDoItem from "./ToDoItem";

const Main = () => {
    return(
        <div>
            <h1>Checklist</h1>
                <ToDoItem
                    props={{name: "item", src:"item1.jpg", alt:"ocean view"}}
                />
                <ToDoItem/>
                <ToDoItem/>
        </div>
    )
}

export default Main