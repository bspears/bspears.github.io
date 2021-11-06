
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hot } from "react-hot-loader";
import AppHeader from "./components/AppHeader";
import FeatureList from "./components/FeatureList";
import FeatureDetail from "./components/FeatureDetail";
import Profile from "./components/Profile";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { getUser } from "./slices/user/userSlice.js";
import { getSiteData } from "./slices/site/siteSlice.js";
import { getFeatureData } from "./slices/features/featuresSlice.js";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const { user, site, features } = useSelector(state => state);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getSiteData());
    dispatch(getFeatureData());
  }, []);

  return(
    <Router>
      <div className="App">
        
        <Router>
          <AppHeader 
            logo={site.logoImage} 
            userName={user.firstName} 
            siteTitle={site.title}
          />
          <Switch>
            <Route path="/profile">
              <Profile user={user}/>
            </Route>
            <Route path="/feature">
              <FeatureDetail features={features.data}/>
            </Route>
            <Route exact path="/">
              <FeatureList features={features.data} title={features.metaData.title}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Router>
  );

}

export default hot(module)(App);