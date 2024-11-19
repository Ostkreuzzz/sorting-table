import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { NotFoundPage } from './NotFoundPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path={`people/:personSlug?`} element={<PeoplePage />} />

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/home" element={<Navigate to={'/'} replace />} />
      </Route>
    </Routes>
    <App />
  </Router>
);
