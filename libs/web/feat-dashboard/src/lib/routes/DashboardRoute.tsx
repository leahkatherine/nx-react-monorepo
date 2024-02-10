import { Routes, Route } from 'react-router-dom';

import { DashboardPage } from '../pages';

export const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
};
