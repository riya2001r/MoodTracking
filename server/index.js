const express = require('express');
const app = express();
const moodRoutes = require('./routes/moodRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mood Tracker API is running');
});

app.use('/api/mood', moodRoutes);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
