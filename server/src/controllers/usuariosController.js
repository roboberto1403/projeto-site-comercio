import { usuario } from "../models/index.js";

class UsuariosController { 

  static async cadastrarUsuario(req, res) {
      try {
        const novoUsuario = await usuario.create(req.body);
        
        res.status(201).json({ message: "Usuário cadastrado com sucesso", usuario: novoUsuario});
      } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar usuário" });
      }
  }

  static async listarUsuarios(req, res) {
      try {
        const listaUsuarios = await usuario.find();
        
        res.status(201).json({usuarios: listaUsuarios});
      } catch (error) {
        res.status(500).json({ error: "Erro ao listar usuários" });
      }
  }

  static async atualizarUsuario(req, res) {
      try {
        const id = req.params.id
        const usuarioModificado = await usuario.findByIdAndUpdate(id, {$set: req.body}, {returnDocument: 'after'})
        if (usuarioModificado ==! null) {
          res.status(200).json({message: "Usuário modificado com sucesso!", usurio: usuarioModificado})
        } else {
          res.status(404).json({ error: "Usuário não encontrado" });
        }

      } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar usuário" });
      }
    
  }

  static async deletarUsuario(req, res) {
    try {
      const id = req.params.id
      const usuarioDeletado = await usuario.findByIdAndDelete(id)
      if (usuarioDeletado ==! null) {
          res.status(200).json({message: "Usuário deletado com sucesso!"})
        } else {
          res.status(404).json({ error: "Usuário não encontrado" });
        }
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  }

  static async adicionarProdutoCarrinho(req, res) {
    try {
      const id = req.params.id
      const produto = req.params.produto
      const usuarioCarrinhoAtualizado = await findByIdAndUpdate(id, { $addToSet: { carrinho: produto } }, { returnDocument: 'after' })
      
      if (usuarioCarrinhoAtualizado ==! null) {
        res.status(200).json({message: "Produto adicionado com sucesso!", carrinho: usuarioCarrinhoAtualizado.carrinho})
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao adicionar produto" });
    }
  }

  static async removerProdutoCarrinho(req, res) {
    try {
      const id = req.params.id
      const produto = req.params.produto
      const usuarioCarrinhoAtualizado = await findByIdAndUpdate(id, { $pull: { carrinho: produto } }, { returnDocument: 'after' })
      
      if (usuarioCarrinhoAtualizado ==! null) {
        res.status(200).json({message: "Produto removido com sucesso!", carrinho: usuarioCarrinhoAtualizado.carrinho})
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao remover produto" });
    }
  }
}

export default UsuariosController;