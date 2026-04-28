import express from 'express'
import UsuariosController from '../controllers/usuariosController.js'


const router = express.Router();

router.get("/usuarios", UsuariosController.listarUsuarios);
router.post("/usuarios", UsuariosController.cadastrarUsuario);
router.delete("/usuarios", UsuariosController.cadastrarUsuario);
router.put("/usuarios/:id", UsuariosController.atualizarUsuario);

export default router;