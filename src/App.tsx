// import { HelloUser } from './components/HelloUser';
// import { UserCard } from './components/UserCard';
// import { UserList } from './components/UserList';
// import { Counter } from './components/Counter/Counter';
import { LoginStatus } from './components/Login/LoginStatus';
// import { users } from './test-resource/data';
import './styles/style.scss';

function App() {
  // const name = 'Phan Minh Nhật';
  return (
    <div>
      {/* <strong style={{ color: 'red' }}>HelloUser Component:</strong>
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
      <UserList users={users} /> */}
      {/* <div>--------------------------------</div>
      <strong style={{ color: 'red' }}>Counter Component:</strong>
      <Counter/> */}
      <div>--------------------------------</div>
      <strong style={{ color: 'red' }}>LoginStatus Component:</strong>
      <LoginStatus/>
    </div>
  );
}

export default App;