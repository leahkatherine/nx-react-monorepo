import { useAuthContext } from '@react-monorepo/web/design-system'; // TO DO: Create a useAuthContext hook in design-system
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@react-monorepo/web/design-system'; // TO DO: Create a useToast hook in design-system
import { EmailLogin } from '@react-monorepo/shared/types'; // TO DO: Create a EmailLogin type in shared/types

export const useLogin = () => {
  const { login } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const onSubmitEmail = (credentials: EmailLogin) => {
    const { email, password } = credentials;
    login(email, password)
      .then(() => {
        navigate(state?.path || '/');
        showToast({
          type: 'success',
          message: 'Login successful',
        });
      })
      .catch((error) => {
        console.log(error);
        showToast({
          type: 'error',
          message: error?.response?.data?.message || 'Login failed',
        });
      });
  };

  return {
    onSubmitEmail,
  };
};
