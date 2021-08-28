import "./App.css"
import { useState, useEffect } from "react"
import Todos from "./components/todos"
import Header from "./components/header"
import { Container, List } from "@material-ui/core"

function App() {
  // App Level State for Todo items
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "something",
      description: "something a bit longer"
    },
    {
      id: 1,
      title: "MORE",
      description: "More about this topic"
    },
    {
      id: 2,
      title: "It's about time",
      description: "Maybe we should discuss the weather"
    }
  ])

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = todo => {
    console.log(todos)
    setTodos([todo, ...todos])
    console.log(todos)
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Header onAddTodo={addTodo} />
        <List>{todos.length > 0 ? <Todos todos={todos} onDelete={deleteTodo} /> : "No Todos Set"}</List>
      </Container>
    </div>
  )
}

export default App
