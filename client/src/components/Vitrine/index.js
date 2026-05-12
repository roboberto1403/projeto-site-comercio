import styled from 'styled-components'
import { getProdutos } from '../../services/produtos';
import { useEffect, useState, useRef } from 'react';
import Titulo from '../Titulo';
import ProdutoCard from '../ProdutoCard';
import colar from '../../images/colar.jpg'

const VitrineContainer = styled.section`
  background-color: #EBECEE;
  padding: 30px;
`

const ListaProdutos = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  margin-top: 30px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const listaRef = useRef(null);

  useEffect(() => {
    fetchProdutos()
  }, [])

  async function fetchProdutos() {
    const produtosDaAPI = await getProdutos();
    setProdutos(produtosDaAPI)
  }

  function scroll(direcao) {
    if (direcao === 'left') {
      listaRef.current.scrollLeft -= 300;
    } else {
      listaRef.current.scrollLeft += 300;
    }
  }

  return (
  <VitrineContainer>
    <Titulo
      cor="#82817b"
      tamanhoFonte="36px"
      alinhamento="center"
    >
      EM PROMOÇÃO
    </Titulo>

    <ListaProdutos ref={listaRef}>
      {produtos.map(produto => (
        <ProdutoCard key={produto._id}>
          <img src={colar} alt={produto.nome} />

          <p>{produto.nome}</p>

          <p>R$ {produto.preco}</p>
        </ProdutoCard>
      ))}
    </ListaProdutos>
      <button onClick={() => scroll('left')}>
        ←
      </button>

      <button onClick={() => scroll('right')}>
        →
      </button>
  </VitrineContainer>
  )
}

export default Vitrine;