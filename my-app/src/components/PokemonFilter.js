import { typeMap } from "../App";
import "./PokemonFilter.css";
import { useState } from "react";
import pokemonData from "../pokemon.json"


export default function PokemonFilter(props){
    
    

    

    function handleTypeClick(typeName){
        props.setTypePressed(prevState => ({
          ...prevState,
          [typeName]: !prevState[typeName]
        }));
        console.log(props.typePressed);
        const updatedShowPokemon = {};
        pokemonData.forEach((item, index) => {
            updatedShowPokemon[index + 1] = checkFilterType(item.type, props.typePressed);
          });
        props.setShowPokemon((updatedShowPokemon), props.showPokemon);
        console.log(props.showPokemon);
    };
    
      


    return(
      
        <div className="filter">
            <header>Filter</header>
            <div className="filterHolder">
              <div className="typeHolder">
                  {Object.keys(typeMap).map((typeName, index) => (
                      <img                     
                          key={index} 
                          src={typeMap[typeName]} 
                          alt={typeName} 
                          onClick={() => handleTypeClick(typeName)}
                          className={`typeImg ${props.typePressed[typeName] ? 'selected' : ''}`}
                      ></img> 
                  ))}
              </div>
            </div>
        </div>
    );
}

function checkFilterType(type, typePressed) {
    // If the type has length 1 or 2
    if (type.length === 1 || type.length === 2) {
      // Check if at least one type in the filter state is false
      for (const typeName of type) {
        if (!typePressed[typeName]) {
          return false;
        }
      }
      // If all types are true, return true
      return true;
    } else {
      // If the type doesn't have length 1 or 2, return false
      return false;
    }
  }

 


  