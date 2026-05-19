import mongoose from 'mongoose';

const filtrosSchema = new mongoose.Schema({
  categoria: [ { type: String } ],
  tipo: [ { type: String } ],
  cor: [ { type: String } ],
  genero: [ { type: String } ]
}, { versionKey: false });

const filtro = mongoose.model('filtros', filtrosSchema);  

export default filtro;