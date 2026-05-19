import axios from 'axios'

const filtrosAPI = axios.create({baseURL: "http://localhost:8080/filtros"});

async function getFiltros() {
  const response = await filtrosAPI.get("/");

  return response.data;
}

export { 
  getFiltros 
};