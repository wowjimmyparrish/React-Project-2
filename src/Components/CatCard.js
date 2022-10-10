function CatCard({ cat }) {
  return (
    <div>
      <li>
        <h2>{cat.name}</h2>
        <img src={cat.image} alt={cat.name}></img>
        <div>
          <p>Description: {cat.description}</p>
          <p>Gender: {cat.gender}</p>
          <p>Age: {cat.age}</p>
          <button>Adopt</button>
        </div>
      </li>
    </div>
  );
}

export default CatCard;
