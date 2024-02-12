import { Register } from '../components/Register'; //TO DO: Create a Register component from ./components
import { LayoutContainer } from '@react-monorepo/web/design-system'; //TO DO: Create a LayoutContainer component in design-system

export const RegisterPage = () => {
  return (
    <LayoutContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // TODO: This should be a theme variable
      }}
    >
      <Register />
    </LayoutContainer>
  );
};
