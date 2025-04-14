import { useEffect, useState } from "react";
type User = {
  id: string,
  name: string,
  email: string
};

export function UserFetcher() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      if(!res.ok) throw new Error('Lỗi khi fetch dữ liệu');
      return res.json();
    })
    .then(data => setUsers(data))
    .catch(error => setError(error.message))
    .finally(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase().trim()));

  if (loading) return <p>Loading data....</p>
  if (error) return <p style={{color: 'red'}}>Loi roi huhu {error}</p>

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm theo tên..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '16px', padding: '8px' }}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id} style={{ marginBottom: '8px' }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}

        {!filteredUsers.length && <p>Khong co data nao phu hop voi tim kiem cua ban</p>}
      </ul>
    </div>
  );
}