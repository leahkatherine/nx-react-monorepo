import { FastifyInstance } from 'fastify';
import { getAllUsers } from '../controllers';
export default async function (fastify: FastifyInstance) {
  fastify.get('/users', getAllUsers);
}
