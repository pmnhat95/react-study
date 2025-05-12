import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type NoteProps = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function NoteDetailPage() {
  const { id } = useParams();
  const [ note, setNote ] = useState<NoteProps | null>(null);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm('Xác nhận xoá ghi chú này?')) {
      const data = localStorage.getItem('notes');
      if (!data) return;
      const newNotes = JSON.parse(data).filter((note: NoteProps) => note.id !== id);
      localStorage.setItem('notes', JSON.stringify(newNotes));
      toast.success('Xoá thành công!');
      navigate('/app');
    }
  };

  useEffect(() => {
    const data = localStorage.getItem('notes');
    if(data) {
      const notes: NoteProps[] = JSON.parse(data);
      const foundNote = notes.find(note => note.id === id);
      setNote(foundNote || null);
    }
  }, [id]);

  if(!note) {
    return <p style={{color: 'red'}}>Không tìm thấy ghi chú</p>
  } 

  return (
    <div style={{ maxWidth: 800 }}>
      <h2>{note.title}</h2>
      <p style={{ fontSize: 12, color: '#666' }}>
        Ngày tạo: {new Date(note.createdAt).toLocaleDateString('vi-VN')}
      </p>
      <p style={{ marginTop: 16, whiteSpace: 'pre-wrap' }}>{note.content}</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
      <button
        onClick={() => navigate(`/app/note/edit/${note.id}`)}
        style={{
          padding: 8,
          backgroundColor: '#facc15',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        ✏️ Sửa
      </button>
      <button
        onClick={handleDelete}
        style={{
          padding: 8,
          backgroundColor: '#ef4444',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        🗑️ Xoá
      </button>
    </div>
    </div>
  )
}