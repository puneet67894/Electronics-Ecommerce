const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createUser,
  register,
  login,
  signup
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authmiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/signup', signup);
router.get('/all', getAllUsers); // Protected route
router.get('/', getAllUsers);
router.post('/', createUser);


module.exports = router;
