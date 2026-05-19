import express from 'express'
import FiltrosController from '../controllers/filtrosController.js'

const router = express.Router();

router.get("/filtros", FiltrosController.listarFiltros);
router.post("/filtros", FiltrosController.cadastrarFiltro);
router.delete("/filtros/:id", FiltrosController.deletarFiltro);

export default router;