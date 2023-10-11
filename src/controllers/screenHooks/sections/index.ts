import React from "react";
import moment from 'moment';
/** Local Modules */
import useApi from "api";
import useModels from "models";

const useSections = () => {
    /** Variables */
    const headings = {
        "Linea": "Linea",
        "consumo": "Consumo",
        "perdidas": "Perdidas",
        "costo": "Costo"
    };

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useClientActions} = useActions();
    const {actGetSections} = useClientActions();

    /** States */
    const [startDate, setStartDate] = React.useState({startDate: new Date('2010-01-02'), endDate: new Date('2010-02-01')});

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useClientsSelectors} = useSelectors();
    const {sectionsSelectors} = useClientsSelectors();
    const sections = useSelector(sectionsSelectors);

    const handleChangeRange = (e: any) => {
        setStartDate(e);
        dispatch(actGetSections({
            onError: (error: any) => console.error(error),
            dates: {
                fechafinal: moment(e.endDate).format('YYYY-MM-DD'),
                fechainicio: moment(e.startDate).format('YYYY-MM-DD')
            }
        }))
    }

    React.useEffect(() => {
        dispatch(actGetSections({
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

export default useSections;