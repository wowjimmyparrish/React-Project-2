import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dogs from "./Components/Dogs";
import Cats from "./Components/Cats";
import AddPet from "./Components/AddPet";
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

  function addDog(newDog) {
    setAllDogs([newDog, ...allDogs]);
  }

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
        <Route path="/addpet">
          <AddPet addDog={addDog} />
        </Route>
        <Route path="*">
          <h1> 404 Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
