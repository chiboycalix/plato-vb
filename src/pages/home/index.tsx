import Users from 'pages/users';
import Error from 'pages/error';
import { useRoute } from '../../hooks/useRoute';
import { Outlet, useParams } from 'react-router-dom';
import { useFetch } from 'hooks/useFetch';
import { Loader } from 'components';
import { ROUTES } from 'constants/routes';
import './home.css';

const Home = () => {
  /**
   *
   * always ensure the homepage redirects to /users/1
   * @return {*}
   */
  useRoute(ROUTES.rootRoute(), ROUTES.redirectToRoute());

  const { userId } = useParams();
  const { data: user } = useFetch(ROUTES.getUser(userId));
  const { data: users, isLoading, error } = useFetch(ROUTES.getUsers());

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '400px' }}>
        <Loader />
      </div>
    );
  }
  if (!isLoading && Object.keys(user).length === 0) {
    return <Error />;
  }

  return (
    <div className="homeWrapper">
      <div className="homeContent">
        <h1>Onboarding Tasks</h1>
        <div className="usersTasksWrapper">
          <div className="users">
            <h2 className="section-title">Users List</h2>
            <Users users={users} isLoading={isLoading} error={error} />
          </div>

          <div className="tasks">
            <h2 className="section-title">Tasks List</h2>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
