import "./App.css";
import PostListing from "./components/PostListing";
import PostDetails from "./components/PostDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={PostListing} />
          <Route path="/post/:postId" exact component={PostDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
