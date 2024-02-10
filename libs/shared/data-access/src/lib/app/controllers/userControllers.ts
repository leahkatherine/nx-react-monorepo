import { FastifyRequest, FastifyReply } from 'fastify';
import { UserFragment } from '@react-monorepo/types';
import { userService } from '../services';

export const getAllUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const users = await userService.getAllUsers();
  return { users };
};
