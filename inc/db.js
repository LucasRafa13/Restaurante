const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Luc@s123",
  database: "saboroso",
  multipleStatements: true
})

module.exports = connection
