import React, { useState } from "react";

//Routing
import { Switch, Route } from "react-router-dom";

//Contexts
import UserContext from "./Contexts/UserContext";

// Components
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

//Bootstrap + Manual Css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [favouriteList, setFavouriteList] = useState([]);

  return (
    <>
      <UserContext.Provider value={{ favouriteList, setFavouriteList }}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </UserContext.Provider>
    </>
  );
};

export default App;
