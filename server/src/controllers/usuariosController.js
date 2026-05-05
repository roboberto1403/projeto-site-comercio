import { usuario } from "../models/index.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class UsuariosController { 

  static async cadastrarUsuario(req, res, next) {
      try {
        const novoUsuario = await usuario.create(req.body);
        
        res.status(201).json({ message: "Usuário cadastrado com sucesso", usuario: novoUsuario});
      } catch (erro) {
        next(erro);
      }
  }

  static async listarUsuarios(req, res, next) {
      try {
        const listaUsuarios = await usuario.find();
        
        res.status(201).json({usuarios: listaUsuarios});
      } catch (erro) {
        next(erro);
      }
  }

  static async atualizarUsuario(req, res, next) {
      try {
        const id = req.params.id
        const usuarioModificado = await usuario.findByIdAndUpdate(id, {$set: req.body}, {returnDocument: 'after'})
        if (usuarioModificado !== null) {
          res.status(200).json({message: "Usuário modificado com sucesso!", usurio: usuarioModificado})
        } else {
          next(new NaoEncontrado("Usuário não encontrado"));
        }
      } catch (erro) {
        next(erro);
      }
    
  }

  static async deletarUsuario(req, res, next) {
    try {
      const id = req.params.id
      const usuarioDeletado = await usuario.findByIdAndDelete(id)
      if (usuarioDeletado !== null) {
          res.status(200).json({message: "Usuário deletado com sucesso!"})
        } else {
          next(new NaoEncontrado("Usuário não encontrado"));
        }
    } catch (erro) {
      next(erro);
    }
  }

  static async listarProdutosCarrinho(req, res, next) {
    try {
      const id = req.params.id;
      const usuarioEncontrado = await usuario.findById(id)
      const carrinho = usuarioEncontrado.carrinho
      var totalCarrinho = 0

      if (usuarioEncontrado !== null) {
        carrinho.map(produto => (
          totalCarrinho += produto.preco
        ))
        res.status(200).json({carrinho: carrinho, total: totalCarrinho})
      } else {
        next(new NaoEncontrado("Usuário não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async adicionarProdutoCarrinho(req, res, next) {
    try {
      const id = req.params.id
      const produtoId = req.params.produto
      const usuarioCarrinhoAtualizado = await usuario.findByIdAndUpdate(id, { $addToSet: { carrinho: produtoId } }, { returnDocument: 'after' })
      
      if (usuarioCarrinhoAtualizado !== null) {
        res.status(200).json({message: "Produto adicionado com sucesso!", carrinho: usuarioCarrinhoAtualizado.carrinho})
      } else {
        next(new NaoEncontrado("Usuário não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async removerProdutoCarrinho(req, res, next) {
    try {
      const id = req.params.id
      const produtoId = req.params.produto
      const usuarioCarrinhoAtualizado = await usuario.findByIdAndUpdate(id, { $pull: { carrinho: produtoId } }, { returnDocument: 'after' })
      
      if (usuarioCarrinhoAtualizado !== null) {
        res.status(200).json({message: "Produto removido com sucesso!", carrinho: usuarioCarrinhoAtualizado.carrinho})
      } else {
        next(new NaoEncontrado("Usuário não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }
}

export default UsuariosController;