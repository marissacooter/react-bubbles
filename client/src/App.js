import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import ProtectedRoute from './components/ProtectedRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <ProtectedRoute path='/bubblepage' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
