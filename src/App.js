import "antd/dist/antd.css";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import { Layout } from "antd";
import Home from "./layouts/Home";
import Dev from "./layouts/Dev";
import Api from "./layouts/Api";
import Header from "./components/Header";

const Wrapper = ({ component: C }) => {
  return (
    <Layout className="layout">
      <Header />
      <C />
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Wrapper component={Home} />}
        ></Route>
        <Route
          exact
          path="/dev"
          render={() => <Wrapper component={Dev} />}
        ></Route>
        <Route
          exact
          path="/api"
          render={() => <Wrapper component={Api} />}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
