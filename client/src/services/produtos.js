import axios from 'axios'

const produtosAPI = axios.create({baseURL: "http://localhost:8080/produtos"});

async function getProdutos(params = "") {
  const response = await produtosAPI.get(`/busca?${params.toString()}`);

  return response.data;
}

export { 
  getProdutos 
};