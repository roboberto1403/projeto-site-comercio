import styled from 'styled-components'
import Titulo from '../Titulo'
import { Link } from 'react-router-dom'

const CardPropagandaContainer = styled.section`
  background-color: #061c46;
  padding: 30px;
`

const BotaoComprar = styled.button`
  display: block;
  margin: 20px auto 0 auto;
  margin-top: 20px;
  width: 180px;
  padding: 14px;
  font-size: 17px;
  border: none;
  border-radius: 8px;
  background: #ffffff;
  color: black;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.95;
  }
`

function CardPropaganda({ rota }) {
  return (
    <CardPropagandaContainer>
      <Titulo
        cor="#ffffff"
        tamanhoFonte="36px"
        alinhamento="center"
      >
        ÚLTIMAS UNIDADES
      </Titulo>
      <Link to={"/" + rota}>
        <BotaoComprar>
          COMPRAR
        </BotaoComprar>
      </Link>
    </CardPropagandaContainer>
  )
}

export default CardPropaganda;