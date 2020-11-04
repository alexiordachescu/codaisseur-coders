import "./App.css";
import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
