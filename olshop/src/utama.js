import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from './Component/dashboard';
import Barang from './Component/barang';
import List from './List';

const Utama = () => (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/barang' component={Barang} />
        <Route path='/list' component={List} />
    </Switch>
);

export default Utama;