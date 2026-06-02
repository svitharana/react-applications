interface Props {
  inputValue: string;
  onInputChange: (val: string) => void;
  textboxValue: string;
  onTextboxChange: (val: string) => void;
}

export default function Input({
  inputValue,
  onInputChange,
  textboxValue,
  onTextboxChange,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        width: "100%",
        maxWidth: "520px",
      }}
    >
      <label style={{ fontWeight: 600, marginBottom: "0.25rem" }}>TODO</label>
      <input
        style={{
          width: "100%",
          padding: "0.65rem 0.75rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
        }}
        type="text"
        value={inputValue}
        placeholder="TODO"
        onChange={(e) => onInputChange(e.target.value)}
      />
      <label style={{ fontWeight: 600, margin: "0.5rem 0 0.25rem" }}>
        Description
      </label>
      <textarea
        style={{
          width: "100%",
          minHeight: "120px",
          padding: "0.75rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
        }}
        value={textboxValue}
        onChange={(e) => onTextboxChange(e.target.value)}
      ></textarea>
    </div>
  );
}
