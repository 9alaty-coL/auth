import { FC, memo } from 'react';
import { useQuery } from 'react-query';

interface User {
  _id: string,
  username: string,
  name: string,
  avatar: string,
}

const getUsers = async (): Promise<User[]> => {
  const url = new URL('https://auth-api-server.vercel.app/api/auth/getAll')
  url.searchParams.append('token', localStorage.getItem('AUTH_TOKEN') ?? '')
  return fetch(url.toString())
  .then(response => response.json())
}

const UsersPageComponent: FC = () => {
  const { data } = useQuery({ queryKey: ['userList'], queryFn: getUsers })
  if (data == null) {
    return <>User list not found!</>
  }
  return <>
    <h1>User in system</h1>
    {data.map(user => <h4 key={user._id}>Username: {user.username}</h4>)}
  </>
}

export const UsersPage = memo(UsersPageComponent);
