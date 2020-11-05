import "./App.css";
import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/post/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
