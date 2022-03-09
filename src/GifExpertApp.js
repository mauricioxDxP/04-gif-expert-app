import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import 'animate.css/animate.css'
const GifExpertApp = ()=>{
//  const animeShows = [
//      'Naruto',
//      'Dragon Ball Z',
//      'One Piece',
//      'Bleach',
//      'Attack on Titan',
//      'Fullmetal Alchemist',
//      'One Punch'];
const [animeShows, setAnimeShows] = useState([
         'Naruto']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setAnimeShows={setAnimeShows}/>
            <hr/>
            <ol>
                {
                animeShows.map( animeShow => 
                    <GifGrid 
                    key={animeShow}
                    anime={animeShow} />
                )
                }
            </ol>
        </>
        
    );
}
export default GifExpertApp;
