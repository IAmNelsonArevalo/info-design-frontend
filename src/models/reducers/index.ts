import {combineReducers} from "redux";
/** Reducers */
import useClientReducers from "./clients";

const useReducers = () => {
    /** Reducers */
    const clientsReducers = useClientReducers();

    return combineReducers({
        ...clientsReducers,
    });
}

export default useReducers;