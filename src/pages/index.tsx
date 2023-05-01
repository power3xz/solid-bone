import { Route, Router, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';

const Main = lazy(() => import('./main'));
const Cards = lazy(() => import('./cards'));

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Main} />
        <Route path="/cards" component={Cards} />
      </Routes>
    </Router>
  );
};

export default Pages;
