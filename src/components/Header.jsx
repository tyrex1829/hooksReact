import React from "react";

const Header = React.memo(function Heading({ x }) {
  return (
    <div>
      <h1>My name is {x}</h1>
    </div>
  );
});

export default Header;
