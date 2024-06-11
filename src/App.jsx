import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderWithButton from "./components/HeaderWithButton";
import Todo from "./components/Todo";
import CardWrapper from "./components/CardWrapper";
import TextComponent from "./components/TextComponent";
import InputComponent from "./components/InputComponent";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 10000);
  }, []);

  return (
    <div>
      {/* fetch */}
      {todos.map((i) => (
        <Todo key={i.id} title={i.title} description={i.description} />
      ))}
    </div>
  );
}

export default App;
