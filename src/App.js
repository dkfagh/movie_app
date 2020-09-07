import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import { HashRouter, Route } from "react-router-dom";

function App() {
   return (
      <HashRouter>
         <Route path="/" exact={true} component={Home} />
         <Route path="/about" component={About} />
      </HashRouter>
   );
}

export default App;
