type UserCardProps = {
  name: string;
  age: number;
  job: string;
}

export function UserCard({ name, age, job }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  )
}

