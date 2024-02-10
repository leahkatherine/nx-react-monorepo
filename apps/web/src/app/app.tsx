import styled from '@emotion/styled';
import { Box } from '@react-monorepo/web/design-system';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="web" />
    </StyledApp>
  );
}

export default App;
