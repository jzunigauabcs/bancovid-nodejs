const { findAll } = require("../dao/clienteDao.js");

const getAll = async function() {
	const result =  await findAll();
	return result;
}

module.exports = {
	getAll
}

