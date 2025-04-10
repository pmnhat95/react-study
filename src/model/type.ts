export type User = {
  id: number;
  name: string;
  age: number;
  job: string;
};

export type UserList = {
  users: Array<User>;
}