import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [name, setName] = useState("Saksham");

  return (
    <>
      <button
        onClick={() => {
          setName(Math.random());
        }}
      >
        Click me to change the title
      </button>
      <Header x={name} />
      <Header x={"Khare"} />
    </>
  );
}

export default App;
