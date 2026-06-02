import Input from "./components/input";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [textboxValue, setTexboValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

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
        onTextboxChange={setTexboValue}
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
