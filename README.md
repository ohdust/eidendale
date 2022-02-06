# Eidendale



## Installation
To insall the application locally, type the following in command-line tool:
```bash
npm install
```

---

## Configure MySQL Database Locally

Inside main directory, you will find a folder named `db`.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.

---

## Usage
To start the application, type the following in command-line tool:
```bash
npm start
```
then navigate to http://localhost:8080 in any browser to view the app.
