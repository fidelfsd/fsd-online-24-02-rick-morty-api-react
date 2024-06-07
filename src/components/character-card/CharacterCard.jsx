import "./CaracterCard.css";
import Status from "./Status";

export default function CharacterCard({ character }) {
   return (
      <div className="card" style={{ width: "18rem" }}>
         <img className="card-img-top" src={character.image} alt="Card image cap" />
         <div className="card-body">
            <h5 className="card-title">{character.name}</h5>

            <div>
               <Status status={character.status} />
            </div>

            <button>More</button>
         </div>
      </div>
   );
}
