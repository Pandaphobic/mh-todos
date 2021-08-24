import logo from "./logo.svg";
import "./App.css";
import { Container } from "@material-ui/core";
import TodoList from "./components/todo-list";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container maxWidth="sm">
        <TodoList></TodoList>
      </Container>
    </div>
  );
}

export default App;
