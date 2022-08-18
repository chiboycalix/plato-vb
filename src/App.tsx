import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Error = React.lazy(() => import('pages/error'));
const Home = React.lazy(() => import('pages/home'));
const Tasks = React.lazy(() => import('pages/tasks'));

const App = () => {
  return (
    <Suspense fallback={''}>
      <Router>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Home />}>
            <Route path=":userId" element={<Tasks />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
