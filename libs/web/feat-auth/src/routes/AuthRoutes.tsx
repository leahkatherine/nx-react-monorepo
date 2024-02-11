import { Routes, Route } from 'react-router-dom';
import { RegisterPage, LoginPage } from '../pages'; // TO DO: Create pages

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
