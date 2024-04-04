
import "./PokemonTeam.css"

export default function PokemonTeam(props){

    const booleanArray = Array(6).fill(false); 
    

    props.pokemonTeam.forEach((value, index) => {
    if (value !== 0) {
        booleanArray[index] = true;
    }
    });


    return(
    <div className="team-box">

        {booleanArray.map((value, index) => (value && 
        <div className="TeamMemberHolder">

                <img src={props.pokemonTeam[index].image} alt={props.pokemonTeam[index].name.english + "image"}/>


        </div>
         ))}
         {props.isTeamFull() && <p className="teamFull">Your team is full!</p>}

    </div>
    )
};







