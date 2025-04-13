const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./revisit.db');

// Run on first time to create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    itemCount INTEGER DEFAULT 0,
    imageUrl TEXT
  )`);
});

module.exports = db;
