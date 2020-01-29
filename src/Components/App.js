import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Score from "./Score";
import Appbar from "./Appbar";
// import Section2 from "./Section2";
// import Section3 from "./Section3";
import Loader from './Loader'
// import Suggestion from "./Suggestion";
const Suggestion = lazy(()=>import('./Suggestion'))
const Score = lazy(()=> import ('./Score'))
const Section2 = lazy(()=> import ('./Section2'))
const Section3 = lazy(()=> import ('./Section3'))


const App = () => {
  return (
    <Router>
      <div
        style={{
          maxWidth: "400px",
          minWidth: "350px",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "Poppins",
          height: '600px',
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
