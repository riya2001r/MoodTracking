// db.js
const mysql = require('mysql2');
const config = require('../config');

let instance = null;

class MySQLDatabase {
    constructor() {
        if (!instance) {
            this.pool = mysql.createPool({
                host: config.db.host,
                user: config.db.user,
                password: config.db.password,
                database: config.db.name
            });
            instance = this;
        }
        return instance;
    }

    getPool() {
        return this.pool.promise();
    }
}

const mysqlDb = new MySQLDatabase();
module.exports = mysqlDb.getPool();
