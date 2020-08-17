import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="App"> 
   
    <Header/>
    <div className = "app__page">
    <Sidebar/>
    <Switch>  
    <Route exact path ="/">
  
    <RecommendedVideos/>
   
     </Route>

<Route exact path  ="/search/:searchTerm">
<SearchPage/>
</Route>
    </Switch>
    </div>

        {/* sidebar*/ }
        {/* Recommeded videos*/ }
     </div>
     </Router>
  );
}

export default App;
