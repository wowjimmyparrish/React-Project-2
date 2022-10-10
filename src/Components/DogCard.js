function DogCard({ dog }) {
  return (
    <div>
      <li>
        <h2>{dog.name}</h2>
        <img src={dog.image} alt={dog.name}></img>
        <div>
          <p>Description: {dog.description}</p>
          <p>Gender: {dog.gender}</p>
          <p>Age: {dog.age}</p>
          <button>Adopt</button>
        </div>
      </li>
    </div>
  );
}

export default DogCard;
