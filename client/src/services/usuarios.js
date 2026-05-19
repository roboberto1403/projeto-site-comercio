import axios from 'axios'

const produtosAPI = axios.create({baseURL: "http://localhost:8080/usuarios/6a0cb88a6d8c89caec8a95bf"});

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