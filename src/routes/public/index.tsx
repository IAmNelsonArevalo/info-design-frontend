import {map} from 'lodash';
import {Route} from 'react-router-dom';
/** Interfaces & Types */
import type {Routes} from 'models/interfaces/routes.interfaces';
/** Local Modules */
import useViews from "views";

const usePublicRoutes = () => {
    /** Views */
    const {useScreens} = useViews();
    const {Client, ClientGraphics, SectionsGraphics, SectionsClients, Sections} = useScreens();

    const routes: Routes[] = [
        {
            path: '',
            component: Client
        },
        {
            path: '/client-graphics',
            component: ClientGraphics
        },
        {
            path: '/sections',
            component: Sections
        },
        {
            path: '/sections-graphics',
            component: SectionsGraphics
        },
        {
            path: '/section-clients',
            component: SectionsClients
        }
    ]

    return map(routes, (route: Routes, index: number) => {
        const Component = route.component;

        return (
            <Route key={index} path={route.path} element={<Component/>}/>
        )
    })
}

export default usePublicRoutes;