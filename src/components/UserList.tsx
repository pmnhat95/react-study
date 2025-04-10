import { UserCard } from './UserCard';
import type { UserList } from '../model/type';
type UserListProps = UserList;

export function UserList({ users }: UserListProps ) {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          job={user.job} />
        )
      )}
    </div>
  )

}