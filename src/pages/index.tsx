import { Route, Router, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';

const Main = lazy(() => import('./main'));

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Main} />
      </Routes>
    </Router>
  );
};

export default Pages;
