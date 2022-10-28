import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dogs">Dogs</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/addpet">Add Pet</Link>
    </nav>
  );
}
export default NavBar;
