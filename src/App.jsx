import { useState } from "react";
import "./App.css";
import React from "react";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Main from "./component/Main/Main";
import Orphelinat from "./Pages/Orphelinat/Orphelinat";
import Don from "./Pages/Don/Don";
import Contacte from "./Pages/contact/Contacte";

const App = () => {
  return (
    <div>
      {/* <Main /> */}
      {/* <Orphelinat /> */}
      {/* <PContact /> */}
      {/* <Don /> */}
      <Contacte />

    </div>
  );
};

export default App;
