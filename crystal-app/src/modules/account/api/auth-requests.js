import { GET, PUT, POST } from '@/lib/ajax-verbs';

export default [
  {
    name: 'login',
    route: '/login',
    method: POST,
  },
  {
    name: 'createUser',
    route: '/register',
    method: POST,
  },
  {
    name: 'getUser',
    route: '/profile/:userId',
    method: GET,
  },
  {
    name: 'updateUser',
    route: '/profile/:userId',
    method: PUT,
  },
  {
    name: 'updatePassword',
    route: '/profile/:userId/update-password',
    method: POST,
  },
]
