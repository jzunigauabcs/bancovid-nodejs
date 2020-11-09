const clienteRouter = require("./clienteRouter.js");

module.exports = (app, prefix) => {
	app.use(`/clientes`, clienteRouter);
}
