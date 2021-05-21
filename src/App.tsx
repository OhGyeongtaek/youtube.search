import "./css/app.module.css";
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MovieList = lazy(() => import("./pages/movieList"));

const App = () => {
  return (
    <div className="App">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={MovieList}/>
            </Switch>
          </Suspense>
        </Router>
    </div>
  );
}

export default App;
