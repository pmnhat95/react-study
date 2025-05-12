import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

type NoteProps = {
  id: string,
  title: string
};

export default function Navbar() {
  const [ notes, setNotes ] = useState<NoteProps[]>([]);
  const [ search, setSearch ] = useState('');
  const [ results, setResults ] = useState<NoteProps[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage.setItem('notes', JSON.stringify([
    //   { id: '1', title: 'Ghi chú học React' },
    //   { id: '2', title: 'Ghi chú công việc' },
    //   { id: '3', title: 'Mua sắm' },
    //   { id: '4', title: 'Ghi chú học tiếng Anh' },
    //   { id: '5', title: 'Note random' },
    // ]));
    const data = localStorage.getItem('notes');
    if (data) setNotes(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }
    const filtered = notes.filter(
      note => note.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
    ).slice(0, 4);  // tối đa 4 kết quả
    setResults(filtered);
  }, [search, notes]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setSearch('');
        setResults([]);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  const handleSelect = (id: string) => {
    setSearch('');
    setResults([]);
    navigate(`/app/note/${id}`);
  };

  return (
    <div ref={wrapperRef} style={{ width: '100%' }}>
      <input placeholder="Tìm ghi chú..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && results.length > 0) {
            e.preventDefault();
            handleSelect(results[0].id)
          }
        }}
        style={{
          padding: 8,
          width: 260,
          borderRadius: 8,
          border: '1px solid #ccc',
          boxSizing: 'border-box'
        }}
      />
      {search.trim().length > 0 && (
        <ul style={{
          position: 'absolute',
          background: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          marginTop: 4,
          width: 260,
          zIndex: 10,
          listStyle: 'none',
          padding: 0
        }}>
          {search.trim().length && !results.length && (
            <li style={{
              padding: '8px 12px',
              cursor: 'pointer',
              borderBottom: '1px solid #eee'
            }}>Không tìm thấy với '{search.trim()}'</li>
          )}
          {results.map(note => (
            <li key={note.id}
              onClick={() => handleSelect(note.id)}
              style={{
                padding: '8px 12px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee'
              }}
            >
              {note.title}
            </li>
          ))}
          
        </ul>
      )}
    </div>
  );
}