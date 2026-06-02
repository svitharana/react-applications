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
    <div>
      <label>TODO</label>
      <input
        type="text"
        value={inputValue}
        placeholder="TODO"
        onChange={(e) => onInputChange(e.target.value)}
      />
      <label>Description</label>
      <textarea
        value={textboxValue}
        onChange={(e) => onTextboxChange(e.target.value)}
      ></textarea>
    </div>
  );
}
