import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ArtistVideos } from './features/artists/components/ArtistVideos'
import { ArtistInfo } from './features/artists/components/ArtistInfo'
import Header from "./features/artists/components/Header"
import 'antd/dist/antd.css'
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/search-by-artist-name">
              <ArtistInfo />
            </Route>
            <Route path="/">
              <ArtistVideos />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
