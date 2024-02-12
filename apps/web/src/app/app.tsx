import { DashboardRoute } from '@react-monorepo/web/feat-dashboard';
import { Route, Routes } from 'react-router-dom';

import { FeatAuth } from '@react-monorepo/feat-auth';

export function App() {
  return (
    <Routes>
      <Route path="/*" element={<DashboardRoute />} />
      <Route path="/feat-auth" element={<FeatAuth />} />
    </Routes>
  );
}

export default App;
