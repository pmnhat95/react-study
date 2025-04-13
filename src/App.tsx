// import { HelloUser } from './components/HelloUser';
// import { UserCard } from './components/UserCard';
// import { Counter } from './components/Counter/Counter';
// import { LoginStatus } from './components/Login/LoginStatus';
import { useState } from 'react';
import { UserForm } from './components/UserManagement/UserForm';
import { UserList } from './components/UserManagement/UserList';
import { UserModel } from './model/type';
import './styles/style.scss';

function App() {
  // const name = 'Phan Minh Nhật';
  const [users, setUsers] = useState<UserModel[]>([]);
  const handleAddUser = (user: UserModel) => {
    setUsers(prev => [...prev, user]);
  };
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
      {/* <div>--------------------------------</div>
      <strong style={{ color: 'red' }}>LoginStatus Component:</strong>
      <LoginStatus/> */}
      <div>--------------------------------</div>
      <strong style={{ color: 'red' }}>UserManagement UserForm Component:</strong>
      <UserForm onAddUser={handleAddUser} existingUsers={users}/>
      <div>--------------------------------</div>
      <strong style={{ color: 'red' }}>UserManagement UserList Component:</strong>
      <UserList users={users} />
    </div>
  );
}

export default App;