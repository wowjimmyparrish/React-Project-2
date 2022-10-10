import DogCard from "./DogCard";

function Dogs({ allDogs }) {
  const dogArray = allDogs.map((dog) => <DogCard key={dog.id} dog={dog} />);

  return (
    <div id="dogs">
      <ul>{dogArray}</ul>
    </div>
  );
}

export default Dogs;
