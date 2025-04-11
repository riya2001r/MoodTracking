const pool = require('./server/db'); 


exports.getAllMoods = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM moods');
    res.json(rows);
  } catch (error) {
    console.error("Error getting moods:", error);
    res.status(500).send('Error retrieving moods');
  }
};


exports.insertDummyData = async (req, res) => {
  try {
    const dummyMoods = ['😀', '😢', '😠', '😨', '😌', '😫', '😵'];
    const randomMood = dummyMoods[Math.floor(Math.random() * dummyMoods.length)];
    const query = 'INSERT INTO mood_entries (mood,date,note) VALUES (?, ?, ?)';
    await pool.query(query, [randomMood]);
    res.send("🎉 Dummy mood inserted!");
  } catch (error) {
    console.error("Error inserting dummy mood:", error);
    res.status(500).send('Failed to insert dummy mood');
  }
};
