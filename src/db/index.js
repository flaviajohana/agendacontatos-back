"user strict";

var mysql = require("mysql");
//local mysql db connection
var connection = mysql.createConnection({
  host: "localhost",
  port: "8989",
  user: "root",
  password: "root",
  database: "agenda_contatos"
});
connection.connect(function(err) {
  if (err) throw err;
});
module.exports = connection;
