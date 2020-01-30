import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import Appbar from "./Appbar";
import Loader from './Loader'
const Suggestion = lazy(()=>import('./Suggestion'))
const Score = lazy(()=> import ('./Score'))
const Section2 = lazy(()=> import ('./Section2'))
const Section3 = lazy(()=> import ('./Section3'))


const App = () => {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>NeetPrep- Your first result</title>
        <link rel="canonical" href="#"/>
      </Helmet>
      <div
        style={{
          maxWidth: "400px",
          minWidth: "350px",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "Poppins",
          height: '700px',
          overflowY: 'scroll'
        }}
      >
        <Appbar />
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Loader/>}>
              <Score />
              <Section2 />
              <Section3 />
            </Suspense>
            
          </Route>

          <Route path="/suggestion">
            <Suspense fallback={<Loader/>}>
              <Suggestion />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
