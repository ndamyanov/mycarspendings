import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from "./containers/NavMenu";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarActions from "./pages/CarActions";
import CarServices from "./pages/CarServices";
import CarTaxes from "./pages/CarTaxes";
import CarStatistics from "./pages/CarStatistics";

import { MyContextProvider } from "./context/context";

// import "@aws-amplify/ui-react/styles.css";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import CarFuel from "./pages/CarFuel";

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <div className="App-content">
          <MyContextProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cars" component={Cars} />
              <Route exact path="/cars/:carId" component={CarActions} />
              <Route path="/cars/:carId/services" component={CarServices} />
              <Route path="/cars/:carId/taxes" component={CarTaxes} />
              <Route path="/cars/:carId/statistics" component={CarStatistics} />
              <Route path="/cars/:carId/fuel" component={CarFuel} />
              {/* <Route
                path="/cars/:carId/notifications"
                component={CarNotifications}
              /> */}
            </Switch>
          </MyContextProvider>
        </div>
      </Router>
    </div>
  );
}

// export default withAuthenticator(App);
export default App;
