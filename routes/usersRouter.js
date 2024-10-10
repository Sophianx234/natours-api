const express = require('express')
const usersController = require(`../controllers/usersController`);
const router = express.Router();

const {getAllUsers,createUser} = usersController;

router.route('/').get(getAllUsers).post(createUser)


module.exports = router