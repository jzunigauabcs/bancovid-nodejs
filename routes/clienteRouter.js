const { Router } = require("express");
const { index } = require("../controllers/clienteController.js");

const router = Router();

router.get("/", index);

module.exports = router;

