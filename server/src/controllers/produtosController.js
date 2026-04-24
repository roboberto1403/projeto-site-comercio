import { produto } from "../models/index.js";

class ProdutosController { 

  static async cadastrarProduto(req, res) {
      try {
        const novoProduto = await produto.create(req.body);
        
        res.status(201).json({ message: "Produto cadastrado com sucesso", produto: novoProduto});
      } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar produto" });
      }
  }

  static async listarProdutos(req, res) {
      try {
        const listaProdutos = await produto.find();
        
        res.status(201).json({produtos: listaProdutos});
      } catch (error) {
        res.status(500).json({ error: "Erro ao listar produtos" });
      }
  }

  static async atualizarProduto(req, res) {
      try {
        const id = req.params.id
        const produtoModificado = await produto.findByIdAndUpdate(id, {$set: req.body}, {returnDocument: 'after'})
        if (produtoModificado ==! null) {
          res.status(200).json({message: "Produto modificado com sucesso!", produto: produtoModificado})
        } else {
          res.status(404).json({ error: "Produto não encontrado" });
        }

      } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar produto" });
      }
    
  }

  static async deletarProduto(req, res) {
    try {
      const id = req.params.id
      const produtoDeletado = await produto.findByIdAndDelete(id)
      if (produtoDeletado ==! null) {
          res.status(200).json({message: "Produto deletado com sucesso!"})
        } else {
          res.status(404).json({ error: "Produto não encontrado" });
        }
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar produto" });
    }
  }
}

export default ProdutosController;