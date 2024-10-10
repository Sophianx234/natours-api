const express = require('express')
const usersController = require(`../controllers/usersController`);
const router = express.Router();

const {getAllUsers,getUser,signup,updateUser,deleteUser} = usersController;
router.route('/signup').post(signup)
router.route('/').get(getAllUsers)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)


module.exports = router