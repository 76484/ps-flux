import React from "react";
import { Route } from "react-router";

import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
    </div>
  );
}

export default App;
