const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "saboroso",
  password: "Luc@s123"
})

module.exports = connection
