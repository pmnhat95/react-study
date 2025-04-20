import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type NoteProps = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function HomePage() {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('notes');
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  if (notes.length === 0) {
    return <p>Chưa có ghi chú nào</p>;
  }

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      { notes.length && notes.map(note => (
        <div key={note.id}
          onClick={() => navigate(`/app/note/${note.id}`)}
          style={{
            padding: 16,
            border: '1px solid #ddd',
            borderRadius: 8,
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            backgroundColor: '#fff',
          }}
        >
          <h3 style={{ margin: '0 0 8px' }}>{ note.title }</h3>
          <p style={{ fontSize: 12, color: '#666' }}>Ngày tạo: {new Date(note.createdAt).toLocaleDateString('vi-VN')}</p>
        </div>
      ))}
    </div>
  )
}