import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <Switch>
        <Route path="/projects">
          <NavBar />
          <Projects />
        </Route>
        <Route path="/">
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
