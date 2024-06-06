import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderWithButton from "./components/HeaderWithButton";

function App() {
  const [name, setName] = useState("Saksham");

  return (
    <>
      <HeaderWithButton />
      <Header x={"Khare"} />
    </>
  );
}

export default App;
