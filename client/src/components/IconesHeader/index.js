import styled from 'styled-components'
import carrinho from '../../images/carrinho-de-compras.png'
import perfil from '../../images/user.png'

const icones = [carrinho, perfil]

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 40px;
  justify-content: flex-end;
  margin-top: 20px;
`

const Icone = styled.li`
  cursor: pointer;
  margin-left: 60px;
  img {
    width: 40px;
    height: 40px;
  }
`

function IconesHeader() {
  return (
    <IconesContainer>
    {icones.map(icone => (
      <Icone>
        <img src={icone} alt="Icone"/>
      </Icone>
    )
    )}
    </IconesContainer>
  )
}

export default IconesHeader;