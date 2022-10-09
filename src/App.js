import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dogs from "./Components/Dogs";
import Cats from "./Components/Cats";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  const [page, setPage] = useState("./");

  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dogs">
          <Dogs />
        </Route>
        <Route path="/cats">
          <Cats />
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
