import styled from 'styled-components'
import Titulo from '../Titulo';
import { getProdutosCarrinho, removerProdutoCarrinho, adicionarProdutoCarrinho  } from '../../services/usuarios';
import { useEffect, useState } from 'react';
import colar from '../../images/colar.jpg'

const CarrinhoContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 0;

  transform: ${props => props.$aberto ? 'translateX(0)' : 'translateX(100%)'};
  transition: 0.3s;

  width: 400px;
  height: 100vh;

  background: white;
`

const ItensContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
  }
`

const InfoProduto = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;

  p {
    margin: 4px 0;
  }
`

const Total = styled.p`
  margin-top: 25px;
  font-size: 20px;
  font-weight: bold;
`

const Checkout = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #326589;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`

const ControleQuantidade = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`

const BotaoQuantidade = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  background: #326589;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }
`

function Carrinho({ aberto }) {
  const [carrinho, setCarrinho] = useState({ itens: [], total: 0 });
  

  useEffect(() => {
    fetchProdutos()
  }, [])

  async function fetchProdutos() {
    const produtosDaAPI = await getProdutosCarrinho();
    setCarrinho(produtosDaAPI.carrinho)
  }

  async function removeProduto(id) {
    await removerProdutoCarrinho(id)
    await fetchProdutos();
  }

  async function adicionaProduto(id) {
    await adicionarProdutoCarrinho(id)
    await fetchProdutos();
  }

  const handleClickButton = (acao, item) => {
    if (acao === 'add') {
      if (item.quantidade < item.produto.estoque) {
        adicionaProduto(item.produto._id)
      } else {
        alert(`Quantidade máxima do item ${item.produto.nome} atingida!`)
      }
    } else {
      removeProduto(item.produto._id)
    }
  }
  return (
    <CarrinhoContainer $aberto={aberto}>
      <Titulo>Carrinho</Titulo>

      <ItensContainer>
        {carrinho.itens?.map(item => (
          <Item key={item._id}>
            <img src={colar} alt="colar"/>

            <InfoProduto>
              <p>{item.produto.nome}</p>
              <ControleQuantidade>
                <BotaoQuantidade onClick={() => handleClickButton('remove', item)}>
                  -
                </BotaoQuantidade>

                <p>Qtd: {item.quantidade}</p>

                <BotaoQuantidade onClick={() => handleClickButton('add', item)}>
                  +
                </BotaoQuantidade>
              </ControleQuantidade>
            </InfoProduto>

            <p>R$ {item.produto.preco * item.quantidade}</p>
          </Item>
        ))}
      </ItensContainer>

      <Total>Total: R$ {carrinho.total}</Total>

      <Checkout>
        Fechar Compra
      </Checkout>
    </CarrinhoContainer>
  )
}

export default Carrinho;