import React from 'react'

import swal from 'sweetalert';



const PokeCard = ({pokemon}) => {

  function getAbilitie(e) {
   
    const url = `https://backend-pokemon-api.onrender.com/api/v1/names_abilities/${e}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        var info = data.results.join("\n")
        swal(info);
      }
      else{
        swal("Se produjo un error en la API externa poke api intente nuevamente.")
      }
    })
    .catch(console.log)
  
  }

    return (
        <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
        <div className="card-header"><b>{pokemon.name}</b></div>
        <div className="card-body">           
          <h6 className="card-subtitle mb-2 text-muted"style={{color : '#000000'}}>Description <br></br>{pokemon.description}</h6> 
          <img src={pokemon.sprites['front_default']} alt="description" />
          <img src={pokemon.sprites['back_default']}  alt="description"/> 
          <button onClick={() => getAbilitie(pokemon.name)}>VER HABILIDADES</button>
        </div>
      </div>
    )
};

export default PokeCard