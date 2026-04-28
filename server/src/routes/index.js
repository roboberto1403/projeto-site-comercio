import express from 'express';
import usuarios from './usuariosRoutes.js'
import produtos from './produtosRoutes.js'
import cors from 'cors';

const routes = (app) => {
    app.get("/", (req, res) => {res.status(200).send("API de Beto");})
    app.use(cors({origin: "*"}));

    app.use(express.json(), usuarios, produtos);
}

export default routes;