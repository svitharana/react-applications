import Input from "./components/input";
import Card from "./components/card";
import { useState } from "react";

function App() {
  interface Todo {
    title: string;
    desc: string;
  }
  const [inputValue, setInputValue] = useState("");
  const [textboxValue, setTexboxValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

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
    setTexboxValue("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "2rem",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2rem", color: "#111827" }}>
        My Todo App
      </h1>
      <Input
        inputValue={inputValue}
        textboxValue={textboxValue}
        onInputChange={setInputValue}
        onTextboxChange={setTexboxValue}
      />
      <button
        style={{
          padding: "0.9rem 1.4rem",
          borderRadius: "0.75rem",
          border: "none",
          background: "#2563eb",
          color: "#ffffff",
          cursor: "pointer",
        }}
        onClick={handleOnClick}
      >
        ADD TODO
      </button>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          width: "100%",
          maxWidth: "520px",
        }}
      >
        {todos.map((item, index) => (
          <Card key={index} title={item.title} desc={item.desc}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
