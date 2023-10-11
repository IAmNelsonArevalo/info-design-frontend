/** Local Modules */
import useHelpers from "helpers";
import useTypes from "types";

const useClientReducers = () => {
    /** Helpers */
    const {useCreateReducer} = useHelpers();
    const {createReducer} = useCreateReducer();

    /** Types */
    const {useClientTypes} = useTypes();
    const {GET_CLIENTS, GET_SECTIONS, GET_SECTIONS_CLIENTS} = useClientTypes();

    const clients = createReducer({clients: []}, {
        [GET_CLIENTS](state: any, action: any) {
            return {
                ...state,
                clients: action.payload
            }
        }
    });

    const sections = createReducer({sections: []}, {
        [GET_SECTIONS](state: any, action: any) {
            return {
                ...state,
                sections: action.payload
            }
        }
    });

    const sections_clients = createReducer({sections_clients: []}, {
        [GET_SECTIONS_CLIENTS](state: any, action: any) {
            return {
                ...state,
                sections_clients: action.payload
            }
        }
    });

    return {
        clients,
        sections,
        sections_clients
    };
}

export default useClientReducers;