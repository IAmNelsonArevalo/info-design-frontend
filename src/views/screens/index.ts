import React from 'react';

const Client = React.lazy(() => import('./clients'));
const ClientGraphics = React.lazy(() => import('./client-graphics'));
const Sections = React.lazy(() => import('./sections'));
const SectionsGraphics = React.lazy(() => import('./sections-graphics'));
const SectionsClients = React.lazy(() => import('./section-clients'));

const useScreens = () => {
    return {
        Client,
        ClientGraphics,
        Sections,
        SectionsGraphics,
        SectionsClients,
    };
}

export default useScreens;