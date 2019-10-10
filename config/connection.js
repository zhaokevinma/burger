//  -- Database Connection --

// dependency
var mysql = require("mysql");

// connection object
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "88888888wow",
  database: "burgers_db"
});

// establish connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export module
module.exports = connection;