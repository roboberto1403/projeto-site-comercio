import styled from 'styled-components'

const ProdutoCard = styled.div`
  min-width: 220px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  p {
    margin: 8px 0;
  }
`

export default ProdutoCard;