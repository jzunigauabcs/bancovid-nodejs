const mysql = require("mysql");
const { HOST, USER, PASSWORD, DATABASE_NAME } = require("../config/database.js");


const connection = mysql.createConnection({
	host: HOST,
	user: USER,
	password: PASSWORD,
	database: DATABASE_NAME 
});

connection.connect((err) => {
	if(err) throw err
	console.log("wiiiiiii");
});


module.exports = connection
