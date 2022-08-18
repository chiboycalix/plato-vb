import React from 'react';
import { useFetch } from 'hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import { ROUTES } from 'constants/routes';
import './tasks.css';

/**
 *
 *
 * @export
 * @interface ITask
 */
export interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 *
 *
 * @param {ITask} { ...task }
 * @return {*}
 */
const Task = ({ ...task }: ITask) => {
  const [completed, setCompleted] = React.useState(task.completed);

  const handleChange = () => {
    setCompleted(!completed);
  };

  return (
    <li className="task-item">
      <div className="checkbox-mark">
        <input type="checkbox" checked={completed} value="" onChange={handleChange} />
      </div>
      <p>{task.title}</p>
    </li>
  );
};

const Tasks = () => {
  const { userId } = useParams();
  const { data: tasks, error, isLoading } = useFetch(ROUTES.getTasks(userId));

  return (
    <div>
      <ul className="tasks">
        {!isLoading &&
          tasks.length > 0 &&
          tasks.map((task: ITask) => {
            return <Task {...task} key={task.id} />;
          })}
        {!isLoading && error && <p>error</p>}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }}>
          {isLoading && <Loader />}
        </div>
      </ul>
    </div>
  );
};

export default Tasks;
