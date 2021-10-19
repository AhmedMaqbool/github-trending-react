import "./App.css";
import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
const RepoPage = React.lazy(() => import("./pages/RepoPage"));
const DeveloperPage = React.lazy(() => import("./pages/DeveloperPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={RepoPage} />
          <Route path="/developers" component={DeveloperPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
