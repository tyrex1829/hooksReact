import { useState } from "react";
import Header from "./Header";

function HeaderWithButton() {
  const [name, setName] = useState("Saksham");

  return (
    <>
      <button
        onClick={() => {
          setName(Math.random());
        }}
      >
        Click me to change title
      </button>
      <Header x={name} />
    </>
  );
}

export default HeaderWithButton;
