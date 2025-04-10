import { UserCard } from './UserCard';

type UserCardProps = {
  name: string;
  age: number;
  job: string;
}

type UserListProps = {
  users: Array<UserCardProps>;
}

export function UserList({ users }: UserListProps ) {
  return (
    <div>
      {users.map((user, i) => (
        <UserCard
          key={i}
          name={user.name}
          age={user.age}
          job={user.job} />
        )
      )}
    </div>
  )

}