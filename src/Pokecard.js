import React from 'react'
import "./Pokecard.css"
const Poke_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"



let padToThree = function padToThree(number) {
    return number <= 999 ? ("00" + number).slice(-3) : number;
  };


 const Pokecard = function(props){
    let ImgSrc = `${Poke_API}${padToThree(props.id)}.png`;
    return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <div className="Pokecard-image">
                    <img src={ImgSrc} alt={props.name} />
                </div>
                <div className="Pokecard-data">Type: {props.type} </div>
                <div className="Pokecard-data">Exp: {props.exp}</div>
            </div>
        )
    
}

export default Pokecard;