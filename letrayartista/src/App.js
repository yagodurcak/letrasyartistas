import Formulario from './components/Formulario';
import styled from '@emotion/styled'

const Container = styled.div`
  background-color: blueviolet;
  width: 100%;
  height: 500px;
  display: grid;
  justify-content: center;
  align-items: center;
`

const Title= styled.h1`
  font-size: 40px;
  color: white;
  background-color: salmon;
  height: fit-content;
  width: fit-content;
  padding: 30px;
  font-weight: 700;
  
  
`


function App() {
  return (
    <Container>
      <div className="grid justify-center">
        <Title>Buscador de letras y canciones</Title>
      </div>
      <Formulario/>
    </Container>
  );
}

export default App;
