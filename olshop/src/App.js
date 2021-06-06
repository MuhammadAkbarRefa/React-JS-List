import React from 'react';
import Utama from './utama';
import Link from 'react-router-dom';
import Media from './Component/Media';

class App extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning navbar-static-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              TOKO KU
              {/* <Media title="MY OLSHOP" /> */}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nanbarNav">
              <div className="navbar-nav nav-item ml-auto">
                <a className="nav-link" href="http://localhost:3000/">Dashboard</a>
                <a className="nav-link" href="http://localhost:3000/barang">Barang</a>
                <a className="nav-link" href="http://localhost:3000/list">List Keranjang</a>
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
