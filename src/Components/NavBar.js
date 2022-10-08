import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/mens">Mens</Link>
      <Link to="/womens">Womens</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
export default NavBar;
