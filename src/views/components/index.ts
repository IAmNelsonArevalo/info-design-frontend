import React from 'react';

const Loading = React.lazy(() => import('./loading'));
const NavBar = React.lazy(() => import('./navbar'));
const Sidebar = React.lazy(() => import('./sidebar'));
const Table = React.lazy(() => import('./table'));

const useComponents = () => {
    return {
        Loading,
        NavBar,
        Sidebar,
        Table,
    };
}

export default useComponents;