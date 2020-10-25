import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import StudentInfo from "./pages/StudentInfo";
import Header from "./components/Header.component";
import AllStudentsInfo from "./states/AllStudentsInfo";
import Footer from "./components/Footer.component";

const Home = lazy(() => import("./pages/Home"));
const StudentInfo = lazy(() => import("./pages/StudentInfo"));

function App() {
  return (
    <AllStudentsInfo>
      <Header />
      <Switch>
        <Suspense fallback={<div>loading page...</div>}>
          <Route exact path="/" component={Home} />
          <Route path="/student-info" component={StudentInfo} />
        </Suspense>
      </Switch>
      <Footer />
    </AllStudentsInfo>
  );
}

export default App;
