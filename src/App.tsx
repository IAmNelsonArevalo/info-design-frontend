import React from 'react';
import {Provider} from "react-redux";
import {usePromiseTracker} from "react-promise-tracker";
/** Local Modules */
import useConfig from "config";
import useViews from "views";
import useRouter from 'routes';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = (): JSX.Element => {
    /** Config */
    const {useInterceptors, useStoreConfig} = useConfig();
    const {store, persistor} = useStoreConfig();
    useInterceptors();

    /** Views */
    const {useComponents} = useViews();
    const {NavBar, Sidebar, Loading} = useComponents();

    /** Routes */
    const Routes = useRouter();

    /** Promise Tracker */
    const {promiseInProgress} = usePromiseTracker();

    /** States */
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, [])

    return (
        <PersistGate persistor={persistor} loading={<Loading/>}>
            <Provider store={store}>
                <React.Suspense fallback={<Loading/>}>
                    {promiseInProgress && <Loading/>}
                    <div className="flex h-screen w-screen bg-gray-50 waves">
                        {width >= 1024 && (
                            <div className="max-w-[300px] w-full">
                                <Sidebar/>
                            </div>
                        )}

                        <div className={`${width <= 1024 ? "w-screen" : 'w-rest-screen'}`}>
                            <NavBar/>
                            <div className="overflow-y-auto h-rest-screen px-[2rem]">
                                {Routes}
                            </div>
                        </div>
                    </div>
                </React.Suspense>
            </Provider>
        </PersistGate>
    );
}

export default App;