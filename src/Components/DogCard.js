import { useState } from "react";

function DogCard({ dog }) {
  const [isDogAdopted, setIsDogAdopted] = useState(false);

  function handleDogAdopt() {
    setIsDogAdopted((isDogAdopted) => !isDogAdopted);
  }

  return (
    <div>
      <li>
        <h2>{dog.name}</h2>
        <img src={dog.image} alt={dog.name}></img>
        <div>
          <p>Description: {dog.description}</p>
          <p>Gender: {dog.gender}</p>
          <p>Age: {dog.age}</p>
          {isDogAdopted ? (
            <button onClick={handleDogAdopt} className="Adopt">
              Adopted!
            </button>
          ) : (
            <button onClick={handleDogAdopt}>Adopt!</button>
          )}
        </div>
      </li>
    </div>
  );
}

export default DogCard;
