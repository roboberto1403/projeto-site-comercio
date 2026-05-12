import styled from 'styled-components'
import ProdutoCard from '../ProdutoCard';
import colar from '../../images/colar.jpg'
import { getProdutos } from '../../services/produtos';
import { useEffect, useState } from 'react';

const GridContainer = styled.section`
  background-color: #e0d561;
  padding: 30px;
`

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 40px;
`

function GridProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetchProdutos()
  }, [])

  async function fetchProdutos() {
    const produtosDaAPI = await getProdutos();
    setProdutos(produtosDaAPI)
  }

  return (
    <GridContainer>
      <Grid>
        {produtos.map(produto => (
        <ProdutoCard key={produto._id}>
          <img src={colar} alt={produto.nome} />

          <p>{produto.nome}</p>

          <p>R$ {produto.preco}</p>
        </ProdutoCard>
        ))}
      </Grid>
    </GridContainer>
  )
}

export default GridProdutos;