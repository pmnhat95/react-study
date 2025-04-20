import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type NoteProps = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function EditNotePage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [note, setNote] = useState<NoteProps | null>(null);

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

  useEffect(() => {
    const data = localStorage.getItem('notes');
    if(data) {
      const notes: NoteProps[] = JSON.parse(data);
      const foundNote = notes.find(note => note.id === id);
      if (foundNote) {
        setNote(foundNote || null);
        setTitle(foundNote.title);
        setContent(foundNote.content);
      }
    } else {
      setNote(null);
    }
  }, [id]);

  const handleUpdateNote = () => {
    if (!title || !content) return alert('Vui lòng nhập đầy đủ tiêu đề và nội dung');

    const newNotes = JSON.parse(localStorage.getItem('notes') || '[]').map((note: any) =>
      note.id === id ? { ...note, title, content } : note
    );
    localStorage.setItem('notes', JSON.stringify(newNotes));
    navigate(`/app/note/${id}`);
  };

  if (!note) {
    return <p style={{color: 'red'}}>Không tìm thấy ghi chú</p>
  }

  return (
    <div style={{ maxWidth: 600 }}>
      <h2>Cập nhật lại note <strong>"{note.title}"</strong></h2>
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
        onClick={handleUpdateNote}
        disabled={!title.trim().length || !content.trim().length}
        style={{
          ...buttonStyle,
          ...(title.trim().length && content.trim().length ? activeStyle : {})
        }}
      >
        Cập nhật ghi chú
      </button>
    </div>
  )
}