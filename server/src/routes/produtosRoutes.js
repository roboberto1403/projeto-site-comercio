import express from 'express'
import ProdutosController from '../controllers/produtosController.js'
import paginar from '../middlewares/paginar.js'

const router = express.Router();

router.get("/produtos", ProdutosController.listarProdutos, paginar);
router.get("/produtos/busca", ProdutosController.listarProdutosPorFiltro, paginar);
router.post("/produtos", ProdutosController.cadastrarProduto);
router.delete("/produtos", ProdutosController.deletarProduto);
router.put("/produtos/:id", ProdutosController.atualizarProduto);

export default router;