import React from 'react';
import Utama from './utama';
import {Link} from 'react-router-dom';
import Media from './Component/Media';

class App extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-success navbar-static-top">
        <div className="container">
        <a className="navbar-brand" href="#">
          <Media image="1.png" title="ADIWIYATA" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav nav-item ml-auto">
            <a className="nav-link" href="http://localhost:3000/">Beranda</a>
            <a className="nav-link" href="http://localhost:3000/galeri">Gallery</a>
            <a className="nav-link" href="http://localhost:3000/haribesar">Hari Besar</a>
            <a className="nav-link" href="http://localhost:3000/list">List Agenda</a>
          </div>
        </div>
        </div>
      </nav>
      <p className="text-center"><Utama /></p>
      </div>
    )
  }
}

export default App;
