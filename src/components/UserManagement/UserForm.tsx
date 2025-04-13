import { useState } from "react";
import { useForm } from 'react-hook-form';

type UserProps = {
  name: string,
  age: number
};

type AddUserProps = {
  onAddUser: (user : UserProps) => void;
  existingUsers: UserProps[]
};

export function UserForm({ onAddUser, existingUsers }: AddUserProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserProps>();

  const onSubmit = (data: UserProps) => {
    console.log('Form data:', data);
    onAddUser(data);
    reset(); // clear form after submit
  };

  const validateName = { 
    required: 'Tên không được để trống',
    validate: (name: string) => {
      if (existingUsers.some((u: UserProps) => u.name.toLowerCase() === name.toLowerCase().trim())) {
        return 'Tên người dùng đã tồn tại';
      }
      return true;
    }
  };

  const validateAge = {
    required: 'Tuổi là bắt buộc',
    min: { value: 1, message: 'Tuổi phải > 0' },
    max: { value: 120, message: 'Anh không phải người bất tử 😄' }
  };

  return (
    <form className="card" onSubmit={ handleSubmit(onSubmit) }>
      <div className="m-b-md">
        <div className="m-b-sm">Name: </div>
        <input placeholder="Name"
        {...register('name', validateName)} />
        {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
      </div>
      
      <div className="m-b-md">
        <div className="m-b-sm">Age:</div>
        <input type="number" placeholder="Age" 
        {...register('age', validateAge)} />
        {errors.age && <div style={{ color: 'red' }}>{errors.age.message}</div>}
      </div>
      <button type="submit" disabled={!errors}>Submit</button>
    </form>
  );
}