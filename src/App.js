import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import StudentInfo from "./pages/StudentInfo";
import Header from "./components/Header.component";
import AllStudentsInfo from "./states/AllStudentsInfo";

function App() {
  return (
    <AllStudentsInfo>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/student-info" component={StudentInfo} />
      </Switch>
    </AllStudentsInfo>
  );
}

export default App;
