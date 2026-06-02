import Input from "./components/input";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleOnClick = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };
  return (
    <div>
      <h1>My Todo App</h1>
      <Input value={inputValue} placeholder="TODO" onChange={setInputValue} />
      <button onClick={handleOnClick}>ADD TODO</button>
      {JSON.stringify(todos)}
    </div>
  );
}

export default App;
