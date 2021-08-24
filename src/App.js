import "./App.css";
import { Container } from "@material-ui/core";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <TodoList></TodoList>
      </Container>
    </div>
  );
}

export default App;
