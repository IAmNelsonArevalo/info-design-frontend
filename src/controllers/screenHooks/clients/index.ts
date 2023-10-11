import React from "react";
import moment from 'moment';
/** Local Modules */
import useApi from "api";
import useModels from "models";

const useClients = () => {
    /** Variables */
    const headings = {
        "Linea": "Linea",
        "consumo_residencial": "Consumo Residencial",
        "consumo_industrial": "Consumo Industrial",
        "perdidas_residencial": "Perdidas Residencial",
        "perdidas_comercial": "Perdidas Comercial",
        "perdidas_industrial": "Perdidas Industrial",
        "costo_residencial": "Costo Residencial",
        "costo_comercial": "Costo Comercial",
        "costo_industrial": "Costo Industrial"
    };

    /** Api */
    const {useActions} = useApi();
    const {dispatch, useClientActions} = useActions();
    const {actGetClients} = useClientActions();

    /** States */
    const [startDate, setStartDate] = React.useState({startDate: new Date('2010-01-02'), endDate: new Date('2010-02-01')});

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useClientsSelectors} = useSelectors();
    const {clientsSelectors} = useClientsSelectors();
    const clients = useSelector(clientsSelectors);

    const handleChangeRange = (e: any) => {
        setStartDate(e);
        dispatch(actGetClients({
            onError: (error: any) => console.error(error),
            dates: {
                fechafinal: moment(e.endDate).format('YYYY-MM-DD'),
                fechainicio: moment(e.startDate).format('YYYY-MM-DD')
            }
        }))
    }

    React.useEffect(() => {
        dispatch(actGetClients({
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
        clients,
        handleChangeRange
    }
}

export default useClients;