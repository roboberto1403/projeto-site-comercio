import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: [true, "O nome do usuário é obrigatório."] },
  email: { type: String, required: [true, "O email do usuário é obrigatório."], unique: true },
  senha: { type: String, required: [true, "A senha do usuário é obrigatória."] },
  telefone: { type: String },
  carrinho: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'produtos' 
  }]
}, { versionKey: false });

const usuario = mongoose.model('usuarios', usuarioSchema);  

export default usuario;