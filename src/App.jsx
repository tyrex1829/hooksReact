import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderWithButton from "./components/HeaderWithButton";

function App() {
  const [name, setName] = useState("Saksham");

  return (
    <div>
      <button
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
      <Header x={"Khare"} />
    </div>
  );
}

export default App;
