import { produto } from "../models/index.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class ProdutosController { 

  static async cadastrarProduto(req, res, next) {
      try {
        const novoProduto = await produto.create(req.body);
        
        res.status(201).json({ message: "Produto cadastrado com sucesso", produto: novoProduto});
      } catch (erro) {
        next(erro);
      }
  }

  static async listarProdutos(req, res, next) {
      try {
        const listaProdutos = produto.find();
        
        req.resultado = listaProdutos;

        next();

      } catch (erro) {
        next(erro);
      }
  }

  static async encontrarProdutoPorId( req, res, next) {
    try{
      const id = req.params.id
      const produtoRequerido = await produto.findById(id)

      if(produtoRequerido !== null) {
        res.status(200).json(produtoRequerido);
      } else {
        next(new NaoEncontrado("Produto não encontrado"));
      }
    } catch (erro) {
      next(erro)
    }

  }

  static async atualizarProduto(req, res, next) {
      try {
        const id = req.params.id
        const produtoModificado = await produto.findByIdAndUpdate(id, {$set: req.body}, {returnDocument: 'after'})
        if (produtoModificado !== null) {
          res.status(200).json({message: "Produto modificado com sucesso!", produto: produtoModificado})
        } else {
          next(new NaoEncontrado("Produto não encontrado"));
        }

      } catch (erro) {
        next(erro);
      }
    
  }

  static async deletarProduto(req, res, next) {
    try {
      const id = req.params.id
      const produtoDeletado = await produto.findByIdAndDelete(id)
      if (produtoDeletado !== null) {
          res.status(200).json({message: "Produto deletado com sucesso!"})
        } else {
          next(new NaoEncontrado("Produto não encontrado"));
        }
    } catch (erro) {
      next(erro);
    }
  }

  static async listarProdutosPorFiltro (req, res, next) {
        const busca = await processaBusca(req.query);

        try {
          if (busca !== null){
            const listaProdutos = produto
              .find(busca);

            // Mesma logica de antes, primeiro buscamos o resultado depois passamo adiante para o midware
            req.resultado = listaProdutos;

            next();
          } else {
            res.status(200).json([]);
          }

        } catch (erro) {
            next(erro);
        }
    }
}

async function processaBusca(parametros) {
        const { categoria, nome, minPreco, maxPreco } = parametros;

        let busca = {};
        const preco = {};

        if (minPreco) preco.$gte = minPreco, busca.preco = preco;
        if (maxPreco) preco.$lte = maxPreco, busca.preco = preco;
        if (categoria) busca.categoria = categoria;
        if (nome) busca.nome = { $regex: nome, $options: "i" };

        return busca;
}

export default ProdutosController;