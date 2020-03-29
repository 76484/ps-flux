import React from "react";

import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import HomePage from "./HomePage";

function App() {
  const route = window.location.pathname;
  const getPage = route => {
    switch (route) {
      case "/about":
        return <AboutPage />;
      case "/courses":
        return <CoursesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      {getPage(route)}
    </div>
  );
}

export default App;
