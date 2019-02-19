import React from "react"
import ToDoItem from "./ToDoItem";

const Main = () => {
    return(
        <div>
            <h1>Checklist</h1>
                <ToDoItem
                    info={{name: "item 1", src:"item1.jpg", alt:"ocean view"}}
                />
                <ToDoItem
                    info={{name: "item 2", src:"item2.jpg", alt:"ocean view"}}
                />
                <ToDoItem
                    info={{name: "item 3", src:"item3.jpg", alt:"ocean view"}}
                />
        </div>
    )
}

export default Main