import React from "react";
import moment from 'moment';
/** Local Modules */
import useApi from "api";
import useModels from "models";

const useSectionClients = () => {
    /** Variables */
    const headings = {
        "Linea": "Linea",
        "TipoConsumo": "Tipo de consumo",
        "Perdidas": "Perdidas",

    };

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useClientActions} = useActions();
    const {actGetSectionsClients} = useClientActions();

    /** States */
    const [startDate, setStartDate] = React.useState({startDate: new Date('2010-01-02'), endDate: new Date('2010-02-01')});

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useClientsSelectors} = useSelectors();
    const {sectionsClientsSelectors} = useClientsSelectors();
    const sections = useSelector(sectionsClientsSelectors);

    const handleChangeRange = (e: any) => {
        setStartDate(e);
        dispatch(actGetSectionsClients({
            onError: (error: any) => console.error(error),
            dates: {
                fechafinal: moment(e.endDate).format('YYYY-MM-DD'),
                fechainicio: moment(e.startDate).format('YYYY-MM-DD')
            }
        }))
    }

    React.useEffect(() => {
        dispatch(actGetSectionsClients({
            onError: (error: any) => console.error(error),
            dates: {
                fechafinal: moment(startDate.endDate).format('YYYY-MM-DD'),
                fechainicio: moment(startDate.startDate).format('YYYY-MM-DD')
            }
        }))
    }, []);

    return {
        headings,
        startDate,
        sections,
        handleChangeRange
    }
}

export default useSectionClients;