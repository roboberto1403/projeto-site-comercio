import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { 
    type: String, 
    required: [true, "O nome do produto é obrigatório."] },
  categoria: { 
    type: String, 
    required: [true, "A categoria do produto é obrigatória."],
    enum:{
      values: ["Casual", "Esportivo", "Presente", "Infantil"],
      message: "A categoria {VALUE} não é válida."
    } },
  preco: { 
    type: Number, 
    required: [true, "O preço do produto é obrigatório."] },
  imagem: { type: String },
  estoque: { 
    type: Number, 
    required: [true, "O estoque do produto é obrigatório."] },
  produto: { 
    type: String, 
    required: [true, "O tipo do produto é obrigatório."],
    enum:{
      values: ["Colar", "Pulseira", "Anél", "Brinco", "Piercing"],
      message: "O produto {VALUE} não é válido."
    } },
  cor: { 
    type: String, 
    required: [true, "A cor do produto é obrigatória."] },
  genero: { 
    type: String, 
    required: [true, "O gênero do produto é obrigatório."],
    enum:{
      values: ["Homem", "Mulher", "Unissex"],
      message: "O gênero {VALUE} não é válido."
    } },
}, { versionKey: false });

const produto = mongoose.model('produtos', produtoSchema);  

export default produto;