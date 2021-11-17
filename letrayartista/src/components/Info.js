import React from 'react'

function Info({info, letra}) {

    if (letra.length === 0) return null;
    
      return (
        <div className="grid grid-cols-2 gap-4 mt-10">
            <div>
            <h1 className="text-center text-6xl font-bold">Informacion del Artista</h1>
            <div className="mt-10">
                <img src={info.strArtistClearart} alt="" />
                <h2 className="mt-20 text-center text-4xl font-bold">Biografia: {info.strArtist}</h2>
                <h1 className="mt-20 px-10 text-xl text-center">{info.strBiographyES}</h1>
            </div>
            </div>
            <div>
                <h1 className="text-center text-6xl font-bold">Letra de la canción</h1>
                <h1 className="mt-20 px-60 text-2xl leading-10">{letra}</h1>
            </div>
        </div>
    )
}

export default Info
