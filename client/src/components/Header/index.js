import styled from 'styled-components'
import Logo from '../Logo';
import IconesHeader from '../IconesHeader';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
`

function Header({ aberto, setAberto }) {
  return (
    <HeaderContainer>
        <Logo/>
        <IconesHeader aberto={aberto} setAberto={setAberto} />
    </HeaderContainer>
  )
}

export default Header;