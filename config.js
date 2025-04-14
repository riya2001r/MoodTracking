// config.js
const dotenv = require('dotenv');

dotenv.config();

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    },
    firebase: {
        databaseURL: process.env.FIREBASE_DATABASE_URL
    },
    server: {
        port: process.env.PORT || 3000
    }
};

module.exports = config;
