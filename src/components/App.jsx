import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  // function increase() {
  //   setCount(count + 1);
  // }

  if (count < 0) {
    setCount(0);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
