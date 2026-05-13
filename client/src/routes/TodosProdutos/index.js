import styled from 'styled-components'
import GridProdutos from '../../components/GridProdutos';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 30px 0;
  background-image: linear-gradient(90deg, #a7a7a7 35%, #767676);
`

function TodosProdutos() {
  return (
    <AppContainer>
      <GridProdutos />
    </AppContainer>
  )
}

export default TodosProdutos;