import styled from 'styled-components'
import ProdutoCard from '../ProdutoCard';
import Filtro from '../Filtro';
import colar from '../../images/colar.jpg'
import { getProdutos } from '../../services/produtos';
import { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  
`

const GridContainer = styled.div`
  width: 80%;
  padding: 30px;
`

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 40px;
`

const FiltroContainer = styled.div`
  width: 20%;
  padding: 30px;
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

  const cores = ["Azul", "Laranja", "Amarelo"]

  return (
    <Container>
      <FiltroContainer>
        <Filtro
          titulo="Cores"
          filtrosOpcoes={cores}
        />
      </FiltroContainer>
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
    </Container>
  )
}

export default GridProdutos;