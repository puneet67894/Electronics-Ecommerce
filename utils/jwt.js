// BACKEND/utils/jwt.js

const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key'; // You can store this in .env for production

// Generate a token
const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: '1h',
    });
};

// Verify token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
};

module.exports = { generateToken, verifyToken };
