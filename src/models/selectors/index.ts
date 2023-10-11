import {useSelector} from "react-redux";
/** Selectors */
import useClientsSelectors from "./clients";

const useSelectors = () => {
    return {
        useSelector,
        useClientsSelectors,
    }
}

export default useSelectors;