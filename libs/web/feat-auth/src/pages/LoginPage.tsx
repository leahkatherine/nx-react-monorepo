import { LayoutContainer, Typography } from '@reactmonorepo/web/design-system'; //TO DO: Create a Typography component in design-system
import { Login } from '../components/Login'; // TO DO: Create a Login component from ./components

export const LoginPage = () => {
  // how should I wrap the Login card on the page so that it is centered?
  // Follow MUI standards and best practices

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
      <Login />
    </LayoutContainer>
  );
};
