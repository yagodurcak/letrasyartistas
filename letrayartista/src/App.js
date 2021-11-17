import React, {useEffect, useState} from 'react';

import Formulario from './components/Formulario';
import Info from './components/Info';
import axios from 'axios';
import styled from '@emotion/styled';

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
  const [confirmArtist, setConfirmArtist] = useState({});
  const [letra, setLetra] = useState("");
  const [info, setInfo] = useState("");
  
 useEffect(() => {
  if(Object.keys(confirmArtist).length === 0 ) return;
  

  
  const ConsultarLetra = async () => {
    
    const {artist, cancion} = confirmArtist;
    
   
    
    const url = `https://api.lyrics.ovh/v1/${artist}/${cancion}`;
    const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
    const [letra, info] = await Promise.all([
      axios(url),
      axios(url2)
    ]
    )

    setLetra(letra.data.lyrics);
    setInfo(info.data.artists[0]);
    console.log(info.data.artists[0]);
    
    
  };
  ConsultarLetra()
 }, [confirmArtist]);

 
  return (
    <div>
      <Container>
        <div className="grid justify-center">
          <Title>Buscador de letras y canciones</Title>
        </div>
        <Formulario setConfirmArtist= {setConfirmArtist} />
      </Container>
        <Info letra={letra} info={info}/>
    </div>
  );
}

export default App;
