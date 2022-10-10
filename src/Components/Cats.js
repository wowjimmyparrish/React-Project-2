import CatCard from "./CatCard";

function Cats({ allCats }) {
  const catArray = allCats.map((cat) => <CatCard key={cat.id} cat={cat} />);

  return (
    <div id="cats">
      <ul>{catArray}</ul>
    </div>
  );
}

export default Cats;
