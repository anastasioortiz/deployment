import "./PokemonSort.css"
import {sortTypes} from "../App";



export default function PokemonSort(props){

    const handleOrderClick = () => {
        props.setSortDir(prevState => !prevState)
      };

    const changeSort = (newSortType) => {
        if (newSortType !== props.sortType && sortTypes.includes(newSortType)) {
            props.setSortType(newSortType);
        }
    };

    return(
        <div className="Sorter">
            <div className="Category">
                <header> Sort by</header>
                <div className="Categories">
                    <button className="sortButton" onClick={() => changeSort("Alphabetical")}>Alphabetical</button>                    
                    <button className="sortButton" onClick={() => changeSort("Attack")}>Attack</button>
                    <button className="sortButton" onClick={() =>changeSort("Defense")}>Defense</button>
                    <button className="sortButton" onClick={() =>changeSort("HP")}>HP</button>
                    <button className="sortButton" onClick={() =>changeSort("Speed")}>Speed</button>
                    <button className="sortButton" onClick={() =>changeSort("Sp. Attack")}>Sp. Attack</button>
                    <button className="sortButton" onClick={() =>changeSort("Sp. Defense")}>Sp. Defense</button>
                    <button className="sortButton" onClick={() =>changeSort("Entry")}>Entry</button>
                    <button className="reverseButton" onClick={() =>handleOrderClick()}>Reverse Order</button>
                </div>
            </div>
            


            
        </div>
    );


}

