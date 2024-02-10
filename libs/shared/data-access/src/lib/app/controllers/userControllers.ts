import { FastifyRequest, FastifyReply } from 'fastify';
import { UserFragment } from '@react-monorepo/types';

export const getAllUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const users: UserFragment[] = [];
  return { users };
};
