import mongoose from 'mongoose';
import autopopulate from "mongoose-autopopulate";

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: [true, "O nome do usuário é obrigatório."] },
  email: { type: String, required: [true, "O email do usuário é obrigatório."], unique: true },
  senha: { type: String, required: [true, "A senha do usuário é obrigatória."] },
  telefone: { type: String },
  carrinho: {
    itens: [
      {
        produto: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'produtos',
          autopopulate: { select: "nome preco estoque" } 
        },
        quantidade: { 
          type: Number,
          default: 1 
        }
      }
    ],
    total: { 
      type: Number,
      default: 0 
    }
  }
}, { versionKey: false });

usuarioSchema.plugin(autopopulate);

const usuario = mongoose.model('usuarios', usuarioSchema);  

export default usuario;