// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
 /* const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ error: 'No token provided' });

*/
  const authHeader = req.headers.authorization;

  if (!authHeader) {
      return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');


  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });

    req.userId = decoded.userId;
    next();
  });
};
