import { useState } from "react";

function CatCard({ cat }) {
  const [showCatDetails, setShowCatDetails] = useState(false);

  function handleCatClick() {
    setShowCatDetails((showCatDetails) => !showCatDetails);
  }

  return (
    <div>
      <li>
        <h2>{cat.name}</h2>
        <img src={cat.image} alt={cat.name}></img>
        <button onClick={handleCatClick}> About Me!!</button>
        {showCatDetails ? (
          <div>
            <p>Description: {cat.description}</p>
            <p>Gender: {cat.gender}</p>
            <p>Age: {cat.age}</p>
          </div>
        ) : (
          <p></p>
        )}
      </li>
    </div>
  );
}

export default CatCard;
