import "antd/dist/antd.css";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import { Layout } from "antd";
import Home from "./layouts/Home";
import Dev from "./layouts/Dev";
import Api from "./layouts/Api";
import Header from "./components/Header";

function App() {
  return (
    <Layout className="layout">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/dev" component={Dev}></Route>
          <Route exact path="/api" component={Api}></Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
