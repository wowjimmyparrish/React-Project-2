import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dogs from "./Components/Dogs";
import Cats from "./Components/Cats";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  const [page, setPage] = useState("./");
  const [allDogs, setAllDogs] = useState([]);
  const [allCats, setAllCats] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dogs")
      .then((r) => r.json())
      .then((data) => setAllDogs(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/cats")
      .then((r) => r.json())
      .then((data) => setAllCats(data));
  }, []);

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dogs">
          <Dogs allDogs={allDogs} />
        </Route>
        <Route path="/cats">
          <Cats allCats={allCats} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="*">
          <h1> 404 Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
