import styled from 'styled-components'
import Vitrine from '../../components/Vitrine';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #d8b567 35%, #d3bc89);
`

function Home() {
  return (
    <AppContainer> 
      <Vitrine/>
    </AppContainer>
  )
}

export default Home;