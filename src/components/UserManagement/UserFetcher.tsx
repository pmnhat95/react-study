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

  if (loading) return <p>Loading data....</p>
  if (error) return <p style={{color: 'red'}}>Loi roi huhu {error}</p>

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}