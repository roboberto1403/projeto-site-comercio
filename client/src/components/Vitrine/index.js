import styled from 'styled-components'
import { getProdutos } from '../../services/produtos';
import { useEffect, useState } from 'react';
import Titulo from '../Titulo';
import colar from '../../images/colar.jpg'

const VitrineContainer = styled.section`
  background-color: #EBECEE;
  flex-direction: column;
  display: flex;
  padding-bottom: 20px;
`

const ProdutosContainer = styled.div`
  margin-top: 30px;
  justify-content: space-evenly;
  display: flex;

  img {
    width: 32px;
    height: 32px;
  }
`

function Vitrine() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos()
  }, [])

  async function fetchProdutos() {
    const produtosDaAPI = await getProdutos();
    setProdutos(produtosDaAPI)
  }

  return (
    <VitrineContainer>
      <Titulo
      cor="#82817b"
      tamanhoFonte="36px"
      alinhamento="start"
      >
        Em Promoção</Titulo>
      {produtos.map(produto => (
      <ProdutosContainer>
        <img src={colar} alt={produto.nome} />
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
      </ProdutosContainer>
        ))}
    </VitrineContainer>
  )
}

export default Vitrine;