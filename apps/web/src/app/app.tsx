import { DashboardRoute } from '@react-monorepo/web/feat-dashboard';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/*" element={<DashboardRoute />} />
    </Routes>
  );
}

export default App;
