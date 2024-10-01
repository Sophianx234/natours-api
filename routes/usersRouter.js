const express = require('express')
const usersController = require(`../controllers/usersController`);
const router = express.Router();

const {getAllUsers} = usersController;

router.route('/').get(getAllUsers)


module.exports = router