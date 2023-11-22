const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    getThoughts,
    getFriends
  } = require('../../controllers/userController');

  router.route('/').get(getUsers).post(createUser);

  router.route('/:userId').delete(deleteUser).put(updateUser);

  router
  .route('/:userId')
  .get(getSingleUser)
  .get(getThoughts)
  .get(getFriends);

  router.route('/:userId/friends/:friendsId').post(addFriend);