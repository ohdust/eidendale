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
      user: "bcae4857bd7212",
      password: "dff053fa",
      database: "heroku_a93bbf0ab5ae83e"
    })
    return db;
};

module.exports = connectDB;
