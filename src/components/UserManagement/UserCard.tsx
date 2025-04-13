import { UserModel } from '../../model/type';
import styles from './UserCard.module.scss';
type UserCardProps = UserModel;

export function UserCard({ name, age }: UserCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}

