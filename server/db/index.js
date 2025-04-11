const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3307,
  user: 'root',
  password: 'my-secret-pw',
  database: 'mood_tracker'
});

connection.connect((err) => {
  if (err) {
    console.error(' Error connecting to MySQL:', err.message);
    return;
  }
  console.log(' Connected to MySQL');
});

module.exports = connection;
