import { Routes, Route } from 'react-router-dom'
import App from '../pages/App';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}