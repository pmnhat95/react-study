import { UserCard } from './UserCard';
import type { UserListModel } from '../../model/type';
type UserListProps = UserListModel;

export function UserList({ users }: UserListProps ) {
  return (
    <div>
      {users.map((user, i) => (
        <UserCard
          key={user.name + i}
          name={user.name}
          age={user.age} />
        )
      )}
    </div>
  )

}