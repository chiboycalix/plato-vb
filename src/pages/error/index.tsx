import { useNavigate } from 'react-router-dom';
import './error.css';

const Error = () => {
  let navigate = useNavigate();
  return (
    <div id="main">
      <div className="fof">
        <h1>Error 404</h1>
      </div>
      <div className="one">
        <button className="round-grad" onClick={() => navigate(`/`, { replace: true })}>
          go back
        </button>
      </div>
    </div>
  );
};

export default Error;
