const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    getThoughts,
    getFriends,
    addFriend
  } = require('../../controllers/userController');

  router.route('/').get(getUsers).post(createUser);

  router.route('/:userId').delete(deleteUser).put(updateUser);

  router.route('/:userId').get(getSingleUser);
  router.route('/:userId/thoughts').get(getThoughts);
  router.route('/:userId/friends').get(getFriends);

  router.route('/:userId/friends/:friendsId').post(addFriend);

  module.exports = router;