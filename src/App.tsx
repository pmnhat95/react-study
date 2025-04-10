import { HelloUser } from './components/HelloUser';
import { UserCard } from './components/UserCard';
import { UserList } from './components/UserList';
import { users } from './test-resource/data';

function App() {
  const name = 'Phan Minh Nhật';
  return (
    <div>
      <strong style={{ color: 'red' }}>HelloUser Component:</strong>
      <HelloUser name={name} />
      <div>--------------------------------</div>
      <strong style={{ color: 'red' }}>UserCard Component:</strong>
      {
      users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
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