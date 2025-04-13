import { useState } from "react";

type UserProps = {
  name: string,
  age: number
};

type AddUserProps = {
  onAddUser: (user : UserProps) => void;
  existingUsers: UserProps[]
};

export function UserForm({ onAddUser, existingUsers }: AddUserProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // const 

  const validateAge = (age: string): boolean => {
    const ageNumber = Number(age);
    if (ageNumber <= 0) {
      alert('Tuổi phải lớn hơn 0');
      return false;
    }
    if (ageNumber > 120) {
      alert('Tuổi phải lớn quá... Có hong á');
      return false;
    }
    return true;
  };

  const validateName = (name: string, existingUsers: UserProps[]) => {
    if (existingUsers.some((u: UserProps) => u.name.toLowerCase() === name.toLowerCase())) {
      alert('Tên người dùng đã tồn tại');
      return false;
    }
    return true;
  };
  
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (!name || !age || !validateAge(age) || !validateName(name, existingUsers)) return;
    onAddUser({ name, age: Number(age) });
    setName('');
    setAge('');
  };
 
  return (
    <form className="card" onSubmit={ handleSubmit }>
      <div className="m-b-md">
        <div className="m-b-sm">Name: </div>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      
      <div className="m-b-md">
        <div className="m-b-sm">Age:</div>
        <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
      </div>
      <button type="submit" disabled={!name || !age}>Submit</button>
    </form>
  );
}