import React from "react";

import AboutPage from "./AboutPage";
import Header from "./common/Header";
import HomePage from "./HomePage";

function App() {
  const route = window.location.pathname;

  return (
    <div className="container-fluid">
      <Header />
      {route === "/about" ? <AboutPage /> : <HomePage />}
    </div>
  );
}

export default App;
