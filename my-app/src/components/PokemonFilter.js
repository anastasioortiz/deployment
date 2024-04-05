import { typeMap } from "../App";
import "./PokemonFilter.css";
import pokemonData from "../pokemon.json"
import { useEffect } from "react";


export default function PokemonFilter(props){
    
    
  useEffect(()=> {
  }, [props.typePressed, props.setTypePressed, props.showPokemon, props.setShowPokemon])
    

    function handleTypeClick(typeName){
      
      if(typeName != null){
        props.setTypePressed(prevState => ({
          ...prevState,
          [typeName]: !prevState[typeName]
        }));
        const updatedShowPokemon = {};        
        pokemonData.forEach((item, index) => {
            updatedShowPokemon[index + 1] = checkFilterType(item.type, props.typePressed);
          });
        props.setShowPokemon(prevShowPokemon =>(updatedShowPokemon));

      }
    };

    function getOption() {
      var selectElement = document.getElementById("options");
      if(selectElement != null){
        var selectedOption = selectElement.value;
        switch(selectedOption){
          case "1":
            props.setHPFilter({min: 0, max: 99});
            break;
            case "2":
              props.setHPFilter({min: 100, max: 199});
            break;
            case "3":
              props.setHPFilter({min: 200, max: 399});
            break;
            default:
              break;
        }
    }
     
  }
    
      


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
              <div className="HPFilter">
                HP Filter
                <select id="options">
                      <option value="1">Less than 100</option>
                      <option value="2">100-200</option>
                      <option value="3">200+</option>
                      
                  </select>
                
                <button onClick={getOption()}>Submit</button>
              </div>
            </div>
        </div>
    );
}

function checkFilterType(type, typePressed) {
    if (type.length === 1 || type.length === 2) {
      for (const typeName of type) {
        if (!typePressed[typeName]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

 



  