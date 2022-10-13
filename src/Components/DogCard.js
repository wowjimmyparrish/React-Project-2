import { useState } from "react";

function DogCard({ dog }) {
  const [showDogDetails, setShowDogDetails] = useState(false);

  function handleDogClick() {
    setShowDogDetails((showDogDetails) => !showDogDetails);
  }

  return (
    <div className="dogCard">
      <li>
        <h2>{dog.name}</h2>
        <img src={dog.image} alt={dog.name}></img>
        <button className="dogBtn" onClick={handleDogClick}>
          {" "}
          About Me!!{" "}
        </button>
        {showDogDetails ? (
          <div>
            <p>Description: {dog.description}</p>
            <p>Gender: {dog.gender}</p>
            <p>Age: {dog.age}</p>
          </div>
        ) : (
          <p></p>
        )}
      </li>
    </div>
  );
}

export default DogCard;
