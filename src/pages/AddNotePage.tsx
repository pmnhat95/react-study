import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNotePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const buttonStyle: React.CSSProperties = {
    padding: 10,
    color: 'white',
    border: 'none',
    borderRadius: 6,
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const activeStyle: React.CSSProperties = {
    backgroundColor: '#2563eb',
  };

  const handleAddNote = () => {
    if (!title || !content) return alert('Vui lòng nhập đầy đủ tiêu đề và nội dung');

    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString()
    };

    const prevNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    localStorage.setItem('notes', JSON.stringify([...prevNotes, newNote]));
    navigate('/app');
  };
  return (
    <div style={{ maxWidth: 600 }}>
      <h2>Thêm ghi chú mới</h2>
      <input
        placeholder="Tiêu đề"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          borderRadius: 6,
          border: '1px solid #ccc',
          marginBottom: 12,
          boxSizing: 'border-box'
        }}
       />
      <textarea 
        name="content"
        placeholder="Nội dung"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={6}
        style={{
          width: '100%',
          padding: 10,
          borderRadius: 6,
          border: '1px solid #ccc',
          marginBottom: 16,
          boxSizing: 'border-box'
        }}
      />
      <button
        onClick={handleAddNote}
        disabled={!title.trim().length || !content.trim().length}
        style={{
          ...buttonStyle,
          ...(title.trim().length && content.trim().length ? activeStyle : {})
        }}
      >
        Thêm ghi chú
      </button>
    </div>
  )
}