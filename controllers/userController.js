const User = require('../models/user');
const bcrypt = require('bcryptjs');

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const newUser = await User.create({ name, email });
  res.status(201).json(newUser);
};

const register = async (req, res) => {
  // Registration logic
};

const login = async (req, res) => {
  // Login logic
};

const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      password: hashedPassword
    });

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser.id,
        username: newUser.username
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Signup failed' });
  }
};


module.exports = {
  getAllUsers,
  createUser,
  register,
  login,
  signup
};
