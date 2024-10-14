const express = require('express')
const usersController = require(`../controllers/usersController`);
const router = express.Router();

const {getAllUsers,getUser,signup,login,updateUser,deleteUser} = usersController;
router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/').get(getAllUsers)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)


module.exports = router