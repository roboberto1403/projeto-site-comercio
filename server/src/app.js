import express from 'express';
import conectaDB from './config/dbConnect.js';
import routes from "./routes/index.js"

const app = express();
routes(app);

const conexao = await conectaDB();

conexao.on("error", (erro) => {
    console.error("Erro ao conectar", erro);
});
conexao.once("open", () => {
    console.log("Conexão com o banco criada com sucesso!")
})

export default app;