import pokemonData from "./pokemon.json";
import './App.css';
import PokemonCard from './components/PokemonCard';
import PokemonFilter from './components/PokemonFilter';
import { useState, useEffect} from "react";
import PokemonSort from "./components/PokemonSort";
import PokemonTeam from "./components/PokemonTeam";

pokemonData.forEach((item) => {
  item.image = "./" + process.env.PUBLIC_URL + "/pokemonImages/" + formatNumber(item.id) + ".png";
});

const types = ["Grass", "Fire", "Water", "Bug", "Psychic", "Ice", "Dragon", "Fairy", "Steel", "Poison", "Flying", "Ground", "Rock"
, "Electric", "Normal", "Ghost", "Dark", "Fighting"];

export const sortTypes = ["Alphabetical", "Entry", "HP", "Attack", "Defense", "Speed", "Sp. Attack", "Sp. Defense"];

export const typeMap =  createImageMap(types);

function createImageMap(types) {
  const map = {};
  types.forEach(type => {
    map[type] = "./" + process.env.PUBLIC_URL + "/typeImages/" + type + ".svg";
    
  });
  return map;
  
}




function App() {
  
  

  const [hpFilter, setHPFilter] = useState({ min: 0, max: 260 });
  

  const [typePressed, setTypePressed] = useState(() => {
    const initialState = {};
    Object.keys(typeMap).forEach((typeName) => {
      initialState[typeName] = true;
    });
    return initialState;
  });

  const [sortType, setSortType] = useState("Entry");
  const [sortDir, setSortDir] = useState(false);
  const [pokemonTeam, setPokemonTeam] = useState(() => Array(6).fill(0));
  


  const isTeamFull = () => {
    return pokemonTeam.every(value => value !== 0);
  };

  const [showPokemon, setShowPokemon] = useState(() =>{
    var map = {};
    pokemonData.map((item, index) => { 
      map[item.id] = true;
      return true;
    })
    return map; 
  });

  


  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="Holder">
        
          <div className="bottomPart">
            <div className = "searchBar">
              <PokemonFilter typePressed={typePressed} setTypePressed={setTypePressed}
                              showPokemon={showPokemon} setShowPokemon={setShowPokemon}
                              pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam}
                              hpFilter={hpFilter} setHPFilter={setHPFilter}/>
              <PokemonSort sortType={sortType} setSortType={setSortType} sortDir={sortDir} setSortDir={setSortDir}/>
            </div>
            <div className="CardHolder">
            {pokemonData
            
            .sort((a, b) => {
              let sortOrder = 1; 
              if (sortDir) {
                sortOrder = -1;
              }

              switch(sortType){
                case 'Alphabetical':
                  return sortOrder * (a.name.english.localeCompare(b.name.english));
                case 'Entry':
                    return  sortOrder * (a.id - b.id);
                case "Attack":
                  return  sortOrder * (a.base["Attack"] - b.base["Attack"]);
                case "Defense":
                  return  sortOrder * (a.base["Defense"] - b.base["Defense"]);
                case "Sp. Attack":
                  return  sortOrder * (a.base["Sp. Attack"] - b.base["Sp. Attack"]);
                case "Sp. Defense":
                  return  sortOrder * (a.base["Sp. Defense"] - b.base["Sp. Defense"]);
                case "Speed":
                  return  sortOrder * (a.base["Speed"] - b.base["Speed"]);
                case "HP":
                  return  sortOrder * (a.base["HP"] - b.base["HP"]);
                default:
                  return 0
              }
            })
            
            .map((item, index) => { 
                  return(
                  <PokemonCard 
                  key={index} id={formatNumber(item.id)} name={item.name.english} type={item.type} base={item.base} image={item.image} 
                  pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} showPokemon={showPokemon} setShowPokemon={setShowPokemon}
                  hpFilter={hpFilter} setHPFilter={setHPFilter}
                  />)
                })}
            </div>
          </div>
          <div className="topPart">
            <h2> Team </h2>
            <div className="teamHolder"> 
                <PokemonTeam pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} isTeamFull={isTeamFull}></PokemonTeam>
            </div>
          </div>

      </div>
    </div>
  );
}


function formatNumber(number) {
  if (number < 0 || number > 999) {
      return "Invalid number";
  }

  let numberString = number.toString();

  while (numberString.length < 3) {
      numberString = "0" + numberString;
  }

  return numberString;
}

export default App;






