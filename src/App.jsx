import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header x={"Saksham"} />
      <Header x={"Khare"} />
    </>
  );
}

export default App;
