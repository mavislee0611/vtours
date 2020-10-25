import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Directory from './components/Directory';
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Main2 from './components/Main2';
import Directory2 from './components/Directory2';
import BottomBar from './components/BottomBar';
import Intro from './components/Intro';


function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/main" exact component={Main} />
            <Route path="/main2" exact component={Main2} />
            <Route path="/directory" exact component={Directory} />
            <Route path="/directory2" exact component={Directory2} />
          </Switch>
          <BottomBar />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
