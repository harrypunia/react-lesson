import React, {Component} from "react"
import ToDoItem from "./ToDoItem";
import todoData from "./data/todoData"

class Main extends Component {
    constructor(){
        super()
        this.state = {
            todos: todoData
        }
        this.handleChanged = this.handleChanged.bind(this)
    }
    handleChanged(id) {
        this.setState(prevState => {
            const updatedTodo = prevState.todos.map(todo => {
                todo.id === id ? todo.completed = !todo.completed : todo.completed = todo.completed;
                return todo
            })
            return {todos: updatedTodo}
        })
    }
    render() {
        const todoComponents = this.state.todos.map(todo => <ToDoItem key={todo.id} info={todo} handleChanged={this.handleChanged} />)
        return(
            <div>
                <h1>Checklist</h1>
                {todoComponents}
            </div>
        )
    }
}

export default Main