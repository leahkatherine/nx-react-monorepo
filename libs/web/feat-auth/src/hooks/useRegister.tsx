import axios from 'axios';
import { UserCreate } from '@react-monorepo/shared/types'; // TO DO: Create a UserCreate type in shared/types

import { useToast } from '@react-monorepo/web/design-system'; // TO DO: Create a useToast hook in design-system
import { useAuthContext } from '@react-monorepo/web/design-system'; // TO DO: Create a useAuthContext hook in design-system

export const useRegister = () => {
  const { showToast } = useToast();

  const { login } = useAuthContext();
  const onCreateUser = async (user: UserCreate) => {
    return axios
      .post('/user/create', user)
      .then((response) => {
        console.log(response);
        showToast({
          type: 'success',
          message: 'User created successfully',
        });
        login(user.email, user.password);
      })
      .catch((error) => {
        console.log(error);
        showToast({
          type: 'error',
          message: error?.response?.data?.message || 'User creation failed',
        });
      });
  };

  return {
    onCreateUser,
  };
};
