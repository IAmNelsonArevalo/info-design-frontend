import useHelpers from "helpers";

const useClientsSelectors = () => {
    /** Helpers */
    const {useCreateSelector} = useHelpers();
    const {createSelector} = useCreateSelector();

    const clientsSelectors = createSelector(
        (state: any) => state.clients,
        (clients: any) => clients.clients
    );

    const sectionsSelectors = createSelector(
        (state: any) => state.sections,
        (sections: any) => sections.sections
    );

    const sectionsClientsSelectors = createSelector(
        (state: any) => state.sections_clients,
        (sections_clients: any) => sections_clients.sections_clients
    );

    return {
        clientsSelectors,
        sectionsSelectors,
        sectionsClientsSelectors
    };
}

export default useClientsSelectors;