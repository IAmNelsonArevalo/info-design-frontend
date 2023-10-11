import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
/** Local Modules */
import useReducers from "models/reducers";

const useStoreConfig = () => {
    /** Reducers */
    const reducers = useReducers();

    const persistConfig = {
        key: 'root',
        storage
    }

    const reducersPersist = persistReducer(persistConfig, reducers);

    const bindMiddleware = (middleware: any) => {
        if(import.meta.env.NODE_ENV !== "production") {
            return composeWithDevTools(applyMiddleware(...middleware));
        }
    }

    const store = createStore(reducersPersist, {}, bindMiddleware([thunk]));

    const persistor = persistStore(store)

    return {
        store,
        persistor
    };
}

export default useStoreConfig;