const router = require("express").Router();
const cartaController = require("../controllers/carta")

router.post("/agregarBaraja", cartaController.postAgregarCarta)

router.post("/borrarBaraja", cartaController.postQuitarCarta)

router.get("/mostrarBaraja", cartaController.getMostrarBaraja)

module.exports = router