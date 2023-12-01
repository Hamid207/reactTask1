import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HelloWorld from "./HelloWorld";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld title="HelloWorld" />

      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>
    </>
  );
}

export default App;
