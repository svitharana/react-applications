interface Props {
  value: string;
  placeholder: string;
  onChange: (val: string) => void;
}

export default function Input({ value, placeholder, onChange }: Props) {
  return (
    <div>
      <label>Description</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
