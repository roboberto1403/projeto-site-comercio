import styled from 'styled-components'
import Vitrine from '../../components/Vitrine';
import Carrinho from '../../components/Carrinho';
import CardPropaganda from '../../components/CardPropaganda';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #d8b567 35%, #d3bc89);
`

function Home({ aberto }) {
  return (
    <AppContainer> 
      <Vitrine/>
      <CardPropaganda rota={'todosprodutos'}/>
      <Carrinho aberto={aberto} />
    </AppContainer>
  )
}

export default Home;