import React, {useState} from 'react';

import styled from '@emotion/styled'

const InputContainer = styled.div `
    display: grid;
    /* background-color: brown; */
    margin: 30px 30px;
    height: 150px;
    width: 800px;
`

const Input = styled.input`
    width: 100%;
  padding: 12px 20px;
  font-weight: bold;
  font-size: 20px;
`
const Boton = styled.button`
   background-color: salmon;
   font-size: 30px;
   font-weight: 600;
   padding: 10px 60px;
   color: white;
   width: fit-content;
   margin-right: 30px;
   
   `

function Formulario({setConfirmArtist}) {
    
    const [artista, setArtista] = useState({
        artist : '',
        cancion: ''
    });
    
    const [error, setError] = useState(false);
    const {artist, cancion} = artista;

    const SaveValores = e => {
        setArtista({...artista,
                [e.target.name] : e.target.value})
    }

    
    const GuardarValores = (e) => {
     e.preventDefault();

     if (artist.trim() === "" || cancion.trim() === "") {
    
         setError(true)
         return   
         
     } else {
         
        setError(false);
        
        setConfirmArtist(artista);

 
        
     }
    }


    return (
        <div>
            {error ? <div className= "bg-red-500"> <h1 className="text-white text-xl p-5 text-center">Debe completar todos los campos</h1></div> : null }
            <form action="" className="grid justify-items-end" onSubmit={GuardarValores}>
                <div className="grid grid-cols-2 gap-4">
                    <InputContainer>
                        <label htmlFor="" className="text-4xl text-white py-3 font-semibold" >Artista</label>
                        <Input type="text" onChange={SaveValores} name="artist" value={artist}/>
                    </InputContainer>
                    <InputContainer>
                        <label className="text-4xl text-white py-3 font-semibold" >Canción</label>
                        <Input type="text" onChange={SaveValores} name='cancion' value={cancion} />
                    </InputContainer>
                </div>
                 <Boton type="submit">Buscar</Boton>
            </form>
        </div>
    )
}

export default Formulario
