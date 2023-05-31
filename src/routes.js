const UserController = (`require('./controllers/UserController')`)

module.exports = [
    {
        endpoints: '/users',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endpoints: '/produtos',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {    
      endpoints: 'users/:id',
      method: 'GET',
      handler: UserController.getUserById,
    },
 ]
