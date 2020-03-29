import React from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";

import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import HomePage from "./HomePage";
import ManageCoursePage from "./ManageCoursePage";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
