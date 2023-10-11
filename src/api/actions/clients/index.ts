import useApi from "api";
import useTypes from "types";
/** Interfaces & Types */
import type {Dispatch} from "redux";
import type {GetClientsRequest} from "models/interfaces/clients.interfaces";

const useClientActions = () => {
    /** Providers */
    const {useProviders} = useApi();
    const {useClientsProviders} = useProviders();
    const {getClients, getSections, getSectionsClients} = useClientsProviders();

    /** clients */
    const {useClientTypes} = useTypes();
    const {GET_CLIENTS, GET_SECTIONS, GET_SECTIONS_CLIENTS} = useClientTypes();

    const actGetClients = (request: GetClientsRequest) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError, dates} = request;

        try {
            const res = await getClients(dates);

            dispatch({
                type: GET_CLIENTS,
                payload: res.data
            });

            const redux = JSON.parse(localStorage.getItem('persist:root')!)
            redux.clients = JSON.stringify({clients: res.data});
            localStorage.setItem('persist:root', JSON.stringify(redux))
        } catch (e) {
            onError && onError(e)
        }
    }

    const actGetSections = (request: GetClientsRequest) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError, dates} = request;

        try {
            const res = await getSections(dates);

            dispatch({
                type: GET_SECTIONS,
                payload: res.data
            });

            const redux = JSON.parse(localStorage.getItem('persist:root')!)
            redux.sections = JSON.stringify({sections: res.data});
            localStorage.setItem('persist:root', JSON.stringify(redux))
        } catch (e) {
            onError && onError(e)
        }
    }

    const actGetSectionsClients = (request: GetClientsRequest) => async (dispatch: Dispatch) => {
        /** Request */
        const {onError, dates} = request;

        try {
            const res = await getSectionsClients(dates);

            dispatch({
                type: GET_SECTIONS_CLIENTS,
                payload: res.data
            });

            const redux = JSON.parse(localStorage.getItem('persist:root')!)
            redux.sections_clients = JSON.stringify({sections_clients: res.data});
            localStorage.setItem('persist:root', JSON.stringify(redux))
        } catch (e) {
            onError && onError(e)
        }
    }

    return {
        actGetClients,
        actGetSections,
        actGetSectionsClients
    };
}

export default useClientActions;