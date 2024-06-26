
import { useState, useEffect } from "react";
import { typeMap } from "../App";
import "./pokemonCard.css";




export default function PokemonCard(props){

    useEffect(()=> {
      }, [props.typePressed, props.setTypePressed, props.pokemonTeam, props.setPokemonTeam])

   const [memberNumber, setMemberNumber] = useState(-1);
 

    function isOnTeam(){
        for(let i =0; i < 6; i++){
            if(props.id === props.pokemonTeam[i].id){
                return true;
            }
        }
        return false;
    }
    
    function handleClick(){
        if(isOnTeam()){
            removePokemon();           
        } else {           
            addPokemon(props);
        }
    }

    const addPokemon = (pokemon) => {

        if (Array.isArray(props.pokemonTeam)) {
            const indexToAddPokemon = props.pokemonTeam.findIndex(id => id === 0);
          
            if (indexToAddPokemon !== -1) {
              props.setPokemonTeam(prevTeam => {
                const updatedTeam = [...prevTeam];
                updatedTeam[indexToAddPokemon] = pokemon;
                setMemberNumber(indexToAddPokemon);
                return updatedTeam;
              });
            } else {
            }
          } else {
          }
        
      };
  
      const removePokemon = () => {
        props.setPokemonTeam(prevTeam => {
            if (Array.isArray(prevTeam)) {
              // Check if the index to remove is valid
              if (memberNumber !== -1) {
                const updatedTeam = [...prevTeam];
                updatedTeam[memberNumber] = 0; // Set the value at the index to 0
                setMemberNumber(-1);

                return updatedTeam;
              } else {
                return prevTeam; 
              }
            } else {
              return prevTeam; 
            }
          });
      };

    
    return(

        props.showPokemon[removeLeadingZeros(props.id)] &&  
        <div className="pokemonItem">
            <div className="PokemonInfo">
                <div className="leftInfo">
                    <div className ="img-holder">
                        <img src= {props.image} alt= {props.name + "image"}></img>
                    </div>
                    <h2>{props.name}</h2>
                        
                </div>
                <div className="rightInfo">
                    <p className="entryNum">#{props.id}</p>
                    <div>
                      
                        <button className="TeamButton" onClick={handleClick}> 
                            {isOnTeam() ? 'Remove' : 'Add'} 
                        </button>
                       
                    </div>
                    <div className="types">
                        {
                            props.type.map((typeName, index) => (
                            <img className="poketype" key={index} src={typeMap[typeName]} alt={typeName} />
                        ))}
                    </div>                   
                </div>
            </div>
            <div className="stats">
                
                    <div className="stat">
                        <p>HP</p> 
                        <p className="statNum">{props.base.HP}</p> 
                    </div>
                    <div className="stat">
                        <p>Attack</p> 
                        <p className="statNum">{props.base["Attack"]}</p> 
                    </div>
                    <div className="stat">
                        <p >Defense</p> 
                        <p className="statNum">{props.base["Defense"]}</p> 
                    </div>
                    <div className="stat">
                        <p>Sp. Attack</p> 
                        <p className="statNum">{props.base["Sp. Attack"]}</p> 
                    </div>
                    <div className="stat">
                        <p>Sp. Defense</p>
                        <p className="statNum">{props.base["Sp. Defense"]}</p> 
                    </div>
                    <div className="stat">
                        <p>Speed</p>
                        <p className="statNum">{props.base["Attack"]}</p> 
                    </div>

            </div>
        </div>
    );
}

function removeLeadingZeros(numberString) {
    return numberString.replace(/^0+/, '');
}


  





    



