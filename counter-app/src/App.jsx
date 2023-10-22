import "./App.css";
import { useState } from "react";

function App() {
  let [Counter, setCounter] = useState(0);
  const addValue = () => {
    if (Counter < 20) {
      Counter += 1;
      setCounter(Counter);
    }
  };
  const removeValue = () => {
    if (Counter > 0) {
      Counter -= 1;
      setCounter(Counter);
    }
  };
  return (
    <>
      <h1>Dolen Counter</h1>
      <h2>Counter value: {Counter}</h2>
      <button onClick={addValue}>Add Value {Counter}</button> &nbsp;
      <button onClick={removeValue}>Remove Value {Counter}</button>
    </>
  );
}

export default App;
