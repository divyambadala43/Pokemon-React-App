import React from 'react'
import "./Pokecard.css"
const Poke_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

 const Pokecard = function(props){
    let ImgSrc = `${Poke_API}${props.id}.png`
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <img src={ImgSrc} />
                <div className="Pokecard-data">Type: {props.type} </div>
                <div className="Pokecard-data">Exp: {props.exp}</div>
            </div>
        )
    
}

export default Pokecard;