import { userModel } from '../models';

export const userService = {
  getAllUsers: async () => {
    const users = await userModel.getAllUsers();
    return users;
  },
};
