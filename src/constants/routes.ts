export const ROUTES = {
  getUsers: () => 'https://jsonplaceholder.typicode.com/users',
  getUser: (userId: string | undefined) => `https://jsonplaceholder.typicode.com/users/${userId || 1}`,
  getTasks: (userId: string | undefined) => `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
  rootRoute: () => '/',
  redirectToRoute: () => `users/${1}`
};