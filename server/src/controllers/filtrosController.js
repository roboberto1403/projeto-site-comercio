import { filtro } from "../models/index.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class FiltrosController { 

  static async listarFiltros(req, res, next) {
    try {
      const listaFiltros = await filtro.find();

      res.status(200).json(listaFiltros);

    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarFiltro(req, res, next) {
    try {
      const novoFiltro = await filtro.create(req.body);
      
      res.status(201).json({ message: "Filtro cadastrado com sucesso", filtro: novoFiltro});
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarFiltro(req, res, next) {
    try {
      const id = req.params.id
      const filtroDeletado = await filtro.findByIdAndDelete(id)
      if (filtroDeletado !== null) {
          res.status(200).json({message: "Filtro deletado com sucesso!"})
        } else {
          next(new NaoEncontrado("Filtro não encontrado"));
        }
    } catch (erro) {
      next(erro);
    }
  }

}


export default FiltrosController;