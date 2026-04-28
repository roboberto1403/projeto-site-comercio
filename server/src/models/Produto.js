import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: [true, "O nome do produto é obrigatório."] },
  descricao: { type: String, required: [true, "A descricao do produto é obrigatório."] },
  preco: { type: Number, required: [true, "O preço do produto é obrigatório."] },
  imagem: { type: String },
  estoque: { type: Number, required: [true, "O estoque do produto é obrigatório."] },
  categoria: { type: String, required: [true, "A categoria do produto é obrigatória."] }
}, { versionKey: false });

const produto = mongoose.model('produtos', produtoSchema);  

export default produto;