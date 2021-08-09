import "antd/dist/antd.css";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/Header";
import { Layout, Menu, Breadcrumb } from "antd";
import "./index.css";
import MainSection from "./components/MainSection";
import Banner from "./components/Banner";
import ApiMainSection from "./components/ApiMainSection";
import ApiCards from "./components/ApiCards";
import ApiSection from "./components/ApiSection";
import ApiTabs from "./components/ApiTabs";
import SlideDrawer from "./components/SlideDrawer";
import Home from "./layouts/Home";
import Dev from "./layouts/Dev";
import Api from "./layouts/Api";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/dev" component={Dev}></Route>
          <Route exact path="/api" component={Api}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
