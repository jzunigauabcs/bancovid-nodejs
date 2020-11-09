const { getAll } = require("../services/clienteService.js");

const index = async function(req, res, next) {
	const clientes = await getAll();
	res.render("clientes/index", { "clientes": clientes });
}

module.exports = {
	index
}
