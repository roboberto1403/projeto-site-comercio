import styled from 'styled-components'
import Titulo from '../Titulo'

const FiltrosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 0px;
  margin-bottom: 30px;
  padding: 0;
`

const FiltroOpcao = styled.li`
  display: flex;
  gap: 12px;
  font-size: 16px;
`

const Checkbox = styled.button`
  width: 22px;
  height: 22px;
  border: 2px solid #326589;
  border-radius: 4px;

  background: ${props => props.$ativo ? '#326589' : 'white'};

  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
`

function Filtro({ titulo, filtrosOpcoes, filtrosSelecionados, toggleFiltro }) {

  return (
    <div>
      <Titulo
        cor="#000000"
        tamanhoFonte="18px"
        alinhamento="start"
      >
        {titulo}
      </Titulo>

      <FiltrosContainer>
        {filtrosOpcoes.map((filtro) => (
          <FiltroOpcao key={filtro}>
            <Checkbox
              $ativo={filtrosSelecionados[titulo.toLowerCase()].includes(filtro)}
              onClick={() => toggleFiltro(titulo.toLowerCase(), filtro)}
            >
              {filtrosSelecionados[titulo.toLowerCase()].includes(filtro) && '✓'}
            </Checkbox>

            {filtro}
          </FiltroOpcao>
        ))}
      </FiltrosContainer>
    </div>
  )
}

export default Filtro;