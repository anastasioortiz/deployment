
import "./PokemonTeam.css"

export default function PokemonTeam(props){

    const booleanArray = Array(6).fill(0); 
    const fullBall = "./" + process.env.PUBLIC_URL + "/images/fullBall.png";
    var teamCount = 0;
    

    props.pokemonTeam.forEach((value, index) => {
    if (value !== 0) {
        booleanArray[index] = true;
        teamCount++;
    }
    });




    return(
    <div className="team-box">
        <div className="TeamCounter">
            {teamCount} / 6 
        </div>
        <div className="Team">
            {booleanArray.map((value, index) => (value !== 0 && 
            <div className="TeamMemberHolder">
                    <img src={fullBall}/>
                    
                    <img src={props.pokemonTeam[index].image} alt={props.pokemonTeam[index].name.english + "image"}/>
                    


            </div>
            ))}
         </div>
         {props.isTeamFull() && <p className="teamFull">Your team is full!</p>}

    </div>
    )
};







