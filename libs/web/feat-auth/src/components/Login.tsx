import {
  Card,
  Typography,
  AnimatedTypography,
  animationProps,
  Box,
} from '@react-monorepo/web/design-system'; // TO DO: Create a Card component in design-system, Create a Typography component in design-system, Create an AnimatedTypography component in design-system, Create a Box component in design-system
import { useState } from 'react';
import { EmailLogin } from './EmailLogin'; // TO DO: Return to this file once you complete the EmailLogin components correct imports

import { useLogin } from '../hooks/useLogin'; // TO DO: Create a useLogin hook from ./hooks

export const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState<boolean>(true);

  const { onSubmitEmail } = useLogin();

  return (
    <Card
      key={`login-card-${(isEmailLogin && 'email') || 'mobile'}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        width: '400px',
        padding: '32px',
        margin: 'auto',
      }}
    >
      <Box sx={{ ...animationProps.smooth }}>
        <Typography>Login</Typography>
        {isEmailLogin ? (
          <EmailLogin onSubmit={onSubmitEmail} />
        ) : (
          <Typography>Not Email Login</Typography>
        )}
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          cursor: 'pointer',
          color: 'on.background.highEmphasis',
          '&:hover': {
            color: 'on.background.mediumEmphasis',
          },
          position: 'absolute',
          bottom: '2rem',
        }}
        onClick={() => setIsEmailLogin(!isEmailLogin)}
      >
        Login with{' '}
        <AnimatedTypography
          animation="slow"
          variant="subtitle2"
          text={isEmailLogin ? 'mobile' : 'email'}
        />
      </Typography>
    </Card>
  );
};
