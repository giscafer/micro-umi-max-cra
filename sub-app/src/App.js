import { lazy } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './App.css';

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/sub-app' : '/'}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about" style={{ paddingLeft: 20 }}>
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default function App() {
  return (
    <div className="app-main">
      <RouteExample />
      <Outlet />
    </div>
  );
}
