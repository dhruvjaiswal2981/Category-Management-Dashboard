const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/db');

const router = express.Router();

// Signup Route
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);

  db.run(`INSERT INTO admins (email, password) VALUES (?, ?)`, [email, hashed], function (err) {
    if (err) return res.status(400).json({ error: 'Email already exists' });
    res.status(201).json({ message: 'Admin created' });
  });
});

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM admins WHERE email = ?`, [email], (err, admin) => {
    if (err || !admin) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = bcrypt.compareSync(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ token });
  });
});

module.exports = router;
