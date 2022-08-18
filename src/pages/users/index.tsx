import { Loader } from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import './users.css';

/**
 *
 *
 * @interface IUser
 */
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface IProps {
  users: IUser[];
  isLoading: boolean;
  error: string | null | undefined;
}
/**
 *
 *
 * @param {IUser} { ...user }
 * @return {*}
 */
const User = ({ ...user }: IUser) => {
  let navigate = useNavigate();
  const { userId } = useParams();

  const handleClick = (id: number) => {
    navigate(`${id}`, { replace: true });
  };
  return (
    <li className="user-item" onClick={() => handleClick(user.id)}>
      {user.name} <span style={{ fontSize: 14 }}>{userId === user.id.toString() ? '✅' : null}</span>
    </li>
  );
};

const Users = ({ users, isLoading, error }: IProps) => {
  return (
    <ul className="users">
      {!isLoading &&
        users.length > 0 &&
        users?.map((user: IUser) => {
          return <User {...user} key={user.id} />;
        })}
      {!isLoading && error && <p>error</p>}
      {isLoading && <Loader />}
    </ul>
  );
};

export default Users;
