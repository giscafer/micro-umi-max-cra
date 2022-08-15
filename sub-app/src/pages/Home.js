/* eslint-disable import/no-anonymous-default-export */
import { useNavigate } from 'react-router-dom';

export default function () {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="app-nav-item" style={{ borderColor: 'green' }}>
        Home Page 1
      </h2>
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        navigate to about
      </button>
    </div>
  );
}
