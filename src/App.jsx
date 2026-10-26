import { Routes, Route } from 'react-router-dom';
import ServicesListPage from './pages/ServicesListPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ServicesListPage />} />
      <Route path="/:id/details" element={<ServiceDetailsPage />} />
    </Routes>
  );
}