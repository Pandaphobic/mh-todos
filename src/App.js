import "./App.css";
import { Container } from "@material-ui/core";
import TodoList from "./components/todo-list";
import { useState } from "react";

function App() {
  // App Level State for Todo items
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "something",
      description: "something a bit longer",
    },
    {
      id: 1,
      title: "MORE",
      description: "More about this topic",
    },
    {
      id: 2,
      title: "It's about time",
      description: "Maybe we should discuss the weather",
    },
  ]);

  const deleteTask = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <TodoList todos={todos} onDelete={deleteTask} />
      </Container>
    </div>
  );
}

export default App;
