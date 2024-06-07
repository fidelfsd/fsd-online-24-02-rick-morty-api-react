import { useEffect, useState } from "react";
import "./CharacterList.css";
import rickMortyService from "../../services/rickMortyService";
import CharacterCard from "../character-card/CharacterCard";

export default function CharacterList() {
   const [characters, setCharacters] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const fetchCharacters = async () => {
         try {
            const data = await rickMortyService.characters.getAll(page);
            setCharacters(data.results);
            setTotalPages(data.info.pages);
         } catch (error) {}
      };

      fetchCharacters();
   }, [page]);

   const nextPage = () => {
      if (page < totalPages) setPage(page + 1);
   };

   const prevPage = () => {
      if (page > 1) setPage(page - 1);
   };

   return (
      <div>
         <h1>Rick and Morty Characters</h1>

         <div>
            <button onClick={prevPage} disabled={page === 1}>
               Previous
            </button>
            <span>
               {page} of {totalPages}
            </span>
            <button onClick={nextPage} disabled={page === totalPages}>
               Next
            </button>
         </div>

         <div className="character-list">
            {characters.map((character) => (
               <CharacterCard key={character.id} character={character} />
            ))}
         </div>
      </div>
   );
}
