import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Component/beranda';
import Galeri from './Component/galeri';
import HariBesar from './Component/haribesar';
import List from './List';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/galeri" component={Galeri} />
        <Route path="/haribesar" component={HariBesar} />
        <Route path="/list" component={List} />
    </Switch>
);

export default Utama;