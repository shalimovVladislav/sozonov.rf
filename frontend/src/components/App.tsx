import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import classes from './App.module.scss';

const App = () => (
    <div className={classes.app}>
        <Navigate to={'/home'} />
        <Outlet />
    </div>
);

export default App;