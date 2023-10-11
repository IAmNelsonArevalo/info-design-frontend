import axios from "axios";
import {trackPromise} from "react-promise-tracker";
/** Interfaces & Types */
import {ClientsDates} from "models/interfaces/clients.interfaces";

const useClientsProviders = () => {
    const getClients = (dates: ClientsDates) => {
        const request = async () => {
            return axios.post('/cliente', dates);
        }

        return trackPromise(request());
    }

    const getSections = (dates: ClientsDates) => {
        const request = async () => {
            return axios.post('/tramos', dates);
        }

        return trackPromise(request());
    }

    const getSectionsClients = (dates: ClientsDates) => {
        const request = async () => {
            return axios.post('/tramos-cliente', dates);
        }

        return trackPromise(request());
    }

    return {
        getClients,
        getSections,
        getSectionsClients
    };
}

export default useClientsProviders;