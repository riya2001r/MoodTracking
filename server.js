const express = require('express');
const app = express();
const connection = require('./server/db/index'); // or wherever your DB connection is
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // To parse JSON request body

// Root test route
app.get('/', (req, res) => {
  res.send('Mood Tracker API is working!');
});

app.post('/mood', (req, res) => {
  const { mood, date, note } = req.body;
  const sql = 'INSERT INTO mood_entries (mood, date, note) VALUES (?, ?, ?)';
  connection.query(sql, [mood, date, note], (err, result) => {
    if (err) {
      console.error('Failed to insert mood entry:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Mood entry added successfully!' });
  });
});

app.listen(4000, () => {
  console.log('server running on port 4000');
});
