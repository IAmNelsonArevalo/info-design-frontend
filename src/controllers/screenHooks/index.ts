import useClients from "./clients";
import useSections from "./sections";
import useSectionClients from "./sections-clients";

const useScreensHooks = () => {
    return {
        useClients,
        useSections,
        useSectionClients
    };
}

export default useScreensHooks;