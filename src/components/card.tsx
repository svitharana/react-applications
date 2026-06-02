interface Props {
  title: string;
  desc: string;
}

export default function Card({ title, desc }: Props) {
  return (
    <div style={{ padding: '1rem', border: '1px solid #d1d5db', borderRadius: '0.75rem', background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', width: '100%' }}>
      <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#111827' }}>{title}</h3>
      <p style={{ margin: '0.5rem 0 0', color: '#4b5563', lineHeight: 1.5 }}>{desc}</p>
    </div>
  );
}
