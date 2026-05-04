import styled from 'styled-components'
import loja from '../../images/loja.png'
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  display: flex;
  font-size: 25px;
  margin-right: 30px;
  padding-left: 20px;
  cursor: pointer;
`
const LogoImg = styled.img`
  margin-right: 10px;
  margin-top: 20px;
  width: 40px;
  height: 40px;
`

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <LogoImg
          src={loja}
          alt="Logo" />
          <p><strong>Beto</strong>Store</p>
      </LogoContainer>
    </Link>

  )
}

export default Logo;