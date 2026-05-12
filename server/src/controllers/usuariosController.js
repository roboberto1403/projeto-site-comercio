import { usuario, produto } from "../models/index.js";
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
      const usuarioEncontrado = await usuario
        .findById(id)
        .populate("carrinho.itens.produto")
      const carrinho = usuarioEncontrado.carrinho

      if (usuarioEncontrado !== null) {
        res.status(200).json({carrinho: carrinho})
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
      const produtoEncontrado = await produto.findById(produtoId)
      const usuarioEncontrado = await usuario.findById(id)
      
      if (usuarioEncontrado !== null) {
        const item = usuarioEncontrado.carrinho.itens.find(item => 
          item.produto._id == produtoId
        )
        if (item == null) {
          await usuarioEncontrado.updateOne(
            { $addToSet: { "carrinho.itens": {produto: produtoId} } }
          )
        } else {
          await usuario.updateOne(
            { _id: id, "carrinho.itens.produto": produtoId },
            { $inc: { "carrinho.itens.$.quantidade": 1 } }
          )        }
        await usuarioEncontrado.updateOne(
          { $inc: { "carrinho.total": produtoEncontrado.preco } }
        )
        
        const usuarioAtualizado = await usuario.findById(id).populate("carrinho.itens.produto")

        res.status(200).json({
          message: "Produto adicionado com sucesso!",
          carrinho: usuarioAtualizado.carrinho
        })
      } else {
        next(new NaoEncontrado("Usuário não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

    static async removerUnidadeProdutoCarrinho(req, res, next) {
    try {
      const id = req.params.id
      const produtoId = req.params.produto
      const produtoEncontrado = await produto.findById(produtoId)
      const usuarioEncontrado = await usuario.findById(id)
      
      if (usuarioEncontrado !== null) {
        const item = usuarioEncontrado.carrinho.itens.find(item => 
          item.produto._id == produtoId
        )
        if (item.quantidade == 1) {
          await usuario.updateOne(
          { _id: id}, 
          { $pull: { "carrinho.itens": { produto: produtoId } } }
        )
        } else {
          await usuario.updateOne(
          { _id: id, "carrinho.itens.produto": produtoId },
          { $inc: { "carrinho.itens.$.quantidade": -1 } }
        ) 
        }
               
        await usuarioEncontrado.updateOne(
          { $inc: { "carrinho.total": -produtoEncontrado.preco } }
        )
        
        const usuarioAtualizado = await usuario.findById(id).populate("carrinho.itens.produto")

        res.status(200).json({
          message: "Produto removido com sucesso!",
          carrinho: usuarioAtualizado.carrinho
        })
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