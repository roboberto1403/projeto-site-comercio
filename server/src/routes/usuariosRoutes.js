import express from 'express'
import UsuariosController from '../controllers/usuariosController.js'


const router = express.Router();

router.get("/usuarios", UsuariosController.listarUsuarios);
router.get("/usuarios/:id", UsuariosController.listarProdutosCarrinho);
router.post("/usuarios", UsuariosController.cadastrarUsuario);
router.post("/usuarios/:id/:produto", UsuariosController.adicionarProdutoCarrinho);
router.delete("/usuarios", UsuariosController.cadastrarUsuario);
router.delete("/usuarios/:id/:produto", UsuariosController.removerProdutoCarrinho);
router.put("/usuarios/:id", UsuariosController.atualizarUsuario);

export default router;