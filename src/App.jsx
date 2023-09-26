import { useState } from "react";
import "./App.css";
import React from "react";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Main from "./component/Main/Main";
import Orphelinat from "./Pages/Orphelinat/Orphelinat";
import Don from "./Pages/Don/Don";
import Contacte from "./Pages/contact/Contacte";
import Section1 from "./component/Accueil/Section1";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Contacte />
    </div>
  );
};

export default App;
