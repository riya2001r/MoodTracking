const express = require('express');
const router = express.Router();
const connection = require('../db/index'); 


router.post('/mood', (req, res) => {
  const { user_id, mood, date, note } = req.body;

  const query = 'INSERT INTO moods (user_id, mood, date, note) VALUES (?, ?, ?, ?)';
  connection.query(query, [user_id, mood, date, note], (err, result) => {
    if (err) {
      console.error('Error inserting mood:', err);
      res.status(500).send('Server error');
    } else {
      res.status(200).send({ message: 'Mood saved!', id: result.insertId });
    }
  });
});

module.exports = router;
