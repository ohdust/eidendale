const mysql = require('mysql');

class Database {
    constructor(config) {
        this.connection = mysql.createConnection( process.env.JAWSDB_URL ? process.env.JAWSDB_URL : config );
    }

    query(sql, args=[]) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (error, rows) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end( error => {
                if (error) {
                    return reject(error);
                } else {
                    resolve();
                }
            } );
        } );
    }
};

// const connectDB = (dbName, dbPassword) => {
//     const db = new Database({
//       host: "localhost",
//       port: 3306,
//       user: "root",
//       password: dbPassword,
//       database: dbName
//     })
//     return db;
// };

const connectDB = (dbName, dbPassword) => {
    const db = new Database({
      host: "us-cdbr-east-05.cleardb.net",
      user: "b1af0f7b564f9f",
      password: "af5e45f0",
      database: "heroku_1d0b472b7c786fd"
    })
    return db;
};

const connectDB = (dbName, dbPassword) => {
    const db = new Database({
      host: "us-cdbr-east-05.cleardb.net",
      user: "b1af0f7b564f9f",
      password: "af5e45f0",
      database: "heroku_1d0b472b7c786fd"
    })
    return db;
};

module.exports = connectDB;
