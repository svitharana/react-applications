import Input from "./components/input";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [textboxValue, setTexboValue] = useState("");
  const [todos, setTodos] = useState([{}]);

  const handleOnClick = () => {
    if (inputValue.trim() === "" && textboxValue.trim() === "") return;
    setTodos([
      ...todos,
      {
        title: inputValue,
        desc: textboxValue,
      },
    ]);
    setInputValue("");
    setTexboValue("");
  };
  return (
    <div>
      <h1>My Todo App</h1>
      <Input
        inputValue={inputValue}
        textboxValue={textboxValue}
        onInputChange={setInputValue}
        onTextboxChange={setTexboValue}
      />
      <button onClick={handleOnClick}>ADD TODO</button>
      {JSON.stringify(todos)}
    </div>
  );
}

export default App;
