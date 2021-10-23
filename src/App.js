import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Headers from "./components/layouts/Headers";
import CourseInfo from "./components/pages/courses/CourseInfo";
import Courses from "./components/pages/courses/Courses";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/course/:id">
           <CourseInfo />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
