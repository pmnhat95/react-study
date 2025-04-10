type HelloUserProps = {
  name: string;
}

export function HelloUser({ name }: HelloUserProps) {
  return <h1>Hello, {name}</h1>;
}