import axios from 'axios'

const produtosAPI = axios.create({baseURL: "http://localhost:8080/usuarios/69e92fe0535986da6254cdc8"});

async function getProdutosCarrinho() {
  const response = await produtosAPI.get("/")

  return response.data
}

async function adicionarProdutoCarrinho(produto) {
  await produtosAPI.post(`/${produto}`);
}

async function removerProdutoCarrinho(produto) {
  await produtosAPI.delete(`/${produto}`);
}

export { 
  getProdutosCarrinho,
  adicionarProdutoCarrinho,
  removerProdutoCarrinho 
};