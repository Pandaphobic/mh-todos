import "./App.css"
import { useState, useEffect } from "react"
import Todos from "./components/todos"
import Header from "./components/header"
import { Container, List } from "@material-ui/core"
const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  // App Level State for Todo items
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

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
