import styled from 'styled-components'
import ProdutoCard from '../ProdutoCard';
import Filtro from '../Filtro';
import colar from '../../images/colar.jpg'
import { getProdutos } from '../../services/produtos';
import { getFiltros } from '../../services/filtros';
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
  const [filtros, setFiltros] = useState([]);
  const [filtrosSelecionados, setFiltrosSelecionados] = useState({
  cor: [],
  categoria: [],
  tipo: [],
  genero: []
  })

  function toggleFiltro(filtro, nome) {
    if (filtrosSelecionados[filtro].includes(nome)) {
      setFiltrosSelecionados({
        ...filtrosSelecionados,
        [filtro]: filtrosSelecionados[filtro].filter(opcao => opcao !== nome)
    })
    } else {
      setFiltrosSelecionados({
        ...filtrosSelecionados,
        [filtro]: [
          ...filtrosSelecionados[filtro],
          nome
        ]
      })
    }
  }

  useEffect(() => {
    const params = new URLSearchParams();

    Object.keys(filtrosSelecionados).forEach(chave => {
    if (filtrosSelecionados[chave].length > 0) {
      for (let i = 0; i < filtrosSelecionados[chave].length; i++) {
        params.append(`${chave}`, filtrosSelecionados[chave][i]);
      }}})

    console.log(filtrosSelecionados)
    console.log(params.toString())
    fetchProdutos(params)
  }, [filtrosSelecionados])

  useEffect(() => {
    fetchFiltros()
  }, [])

  async function fetchProdutos(params) {
    const produtosDaAPI = await getProdutos(params);
    setProdutos(produtosDaAPI)
  }

  async function fetchFiltros() {
    const filtrosDaAPI = await getFiltros();
    setFiltros(filtrosDaAPI)
  }

  const {
    cor = [],
    categoria = [],
    tipo = [],
    genero = []
  } = filtros[0] || {};

  return (
    <Container>
      <FiltroContainer>
      {[      
        ['Cor', cor],
        ['Categoria', categoria],
        ['Tipo', tipo],
        ['Genero', genero]
      ].map(([titulo, opcoes]) => (
        <Filtro
          key={titulo}
          titulo={titulo}
          filtrosOpcoes={opcoes}
          filtrosSelecionados={filtrosSelecionados}
          toggleFiltro={toggleFiltro}
        />
      ))}
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