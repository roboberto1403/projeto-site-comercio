import styled from 'styled-components'

const Titulo = styled.h2`
  width: 100%;
  padding-bottom: 30px;
  margin: 0;
  font-size: ${props => props.tamanhoFonte || "18px"};
  color: ${props => props.cor || "#000"};
  background-color: ${props => props.corDeFundo || "transparent"};
  text-align: ${props => props.alinhamento || "center"};
`

export default Titulo;