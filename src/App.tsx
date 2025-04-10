import { HelloUser } from './HelloUser';
import { UserCard } from './UserCard';
import { UserList } from './UserList';

function App() {
  const name = 'Phan Minh Nhật';
  const users = [
    {
      name: 'Phan Minh Nhật',
      age: 20,
      job: 'Developer',
    },
    {
      name: 'Nguyễn Văn A',
      age: 21,
      job: 'Designer',
    }
  ]
  return (
    <div>
      <strong style={{ color: 'red' }}>HelloUser Component:</strong>
      <HelloUser name={name} />
      <div>--------------------------------</div>
      <strong style={{ color: 'red' }}>UserCard Component:</strong>
      {
      users.map((user, i) => (
        <UserCard
          key={i}
          name={user.name}
          age={user.age}
          job={user.job} />
        )
      )}
      <div>--------------------------------</div>
      <strong style={{ color: 'red' }}>UserList Component:</strong>
      <UserList users={users} />
    </div>
  );
}

export default App;