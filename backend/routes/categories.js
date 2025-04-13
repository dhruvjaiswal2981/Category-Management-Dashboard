const express = require('express');
const db = require('../database/db');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
  db.all(`SELECT * FROM categories`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/', auth, (req, res) => {
  const { name, itemCount, imageUrl } = req.body;
  db.run(`INSERT INTO categories (name, itemCount, imageUrl) VALUES (?, ?, ?)`, [name, itemCount, imageUrl], function (err) {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ id: this.lastID });
  });
});

router.put('/:id', auth, (req, res) => {
  const { name, itemCount, imageUrl } = req.body;
  const { id } = req.params;

  db.run(
    `UPDATE categories SET name = ?, itemCount = ?, imageUrl = ? WHERE id = ?`,
    [name, itemCount, imageUrl, id],
    function (err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

module.exports = router;
