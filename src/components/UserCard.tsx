import { User } from '../model/type';
import styles from './UserCard.module.scss';
type UserCardProps = User;

export function UserCard({ name, age, job }: UserCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  )
}

