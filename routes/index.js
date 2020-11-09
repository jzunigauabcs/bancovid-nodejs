const clienteRouter = require("./clienteRouter.js");
const cuentaRouter = require("./cuentaRouter.js");

module.exports = (app) => {
	app.use("/clientes", clienteRouter);
	app.use("/cuentas", cuentaRouter); 
}
