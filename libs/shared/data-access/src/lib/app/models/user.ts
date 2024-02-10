import { query } from '../utils';
import { UserFragment } from '@react-monorepo/types';

export const userModel = {
  getAllUsers: async () => {
    const users = await query({
      text: 'SELECT * FROM users',
    });

    if (!users.rows[0]) {
      return [];
    }
    return users.rows as UserFragment[];
  },
};
