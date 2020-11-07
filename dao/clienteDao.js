const conn = require("../db/connection.js");

const findAll = function() {
	return new Promise((resolve, reject)=>{
		conn.query("SELECT * FROM clientes", (err, rows) => {
			if(err) reject(err)
			resolve(rows)
		});
	})
};

module.exports = {
	findAll
}
