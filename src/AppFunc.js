import React from "react";

function AppFunc() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Guvi");

  console.log("Rendered");
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setName("Guvi")}>Change Name</button>
    </>
  );
}
export default AppFunc;
