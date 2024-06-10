import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderWithButton from "./components/HeaderWithButton";
import Todo from "./components/Todo";
import CardWrapper from "./components/CardWrapper";
import TextComponent from "./components/TextComponent";
import InputComponent from "./components/InputComponent";

function App() {
  const [id, setId] = useState(3);
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "todo1",
      description: "This is a description of todo1",
    },
    {
      id: 2,
      title: "todo2",
      description: "This is a description of todo2",
    },
    {
      id: 3,
      title: "todo3",
      description: "This is a description of todo3",
    },
  ]);

  return (
    <div>
      {/* // header */}
      {/* <button
        onClick={() => {
          setName(Math.random());
        }}
      >
        Click me to change title
      </button>
      <Header x={name} />
      <Header x={"Khare"} />
      <Header x={"Khare"} />
      <Header x={"Khare"} />
      <Header x={"Khare"} />
      <Header x={"Khare"} /> */}

      {/* // todo */}
      {/* <button
        onClick={() => {
          setId(id + 1);

          setTodo([
            ...todo,
            {
              id: id + 1,
              title: Math.random(),
              description: Math.random(),
            },
          ]);
        }}
      >
        Add new todo
      </button>

      {todo.map((i) => (
        <Todo key={i.id} title={i.title} description={i.description} />
      ))} */}

      {/* wrapper Component */}
      <CardWrapper innerComponent={<TextComponent />} />
      <CardWrapper innerComponent={<InputComponent />} />
    </div>
  );
}

export default App;
