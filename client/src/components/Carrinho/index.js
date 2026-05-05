import styled from 'styled-components'
import Titulo from '../Titulo';
import { getProdutosCarrinho } from '../../services/usuarios';
import { useEffect, useState } from 'react';

function Carrinho() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos()
  }, [])

  async function fetchProdutos() {
    const produtosDaAPI = await getProdutos();
    setProdutos(produtosDaAPI)
  }
  return (
    <div>
      <Titulo />

    </div>
  )
}

export default Carrinho;