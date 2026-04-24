import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  imagem: { type: String },
  estoque: { type: Number, required: true },
  categoria: { type: String, required: true }
}, { versionKey: false });

const produto = mongoose.model('produtos', produtoSchema);  

export default produto;