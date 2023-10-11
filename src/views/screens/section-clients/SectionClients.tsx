import React from 'react';
import Datepicker from "react-tailwindcss-datepicker";
/** Local Modules */
import useControllers from "controllers";
import useViews from 'views';

const SectionClients: React.FC = (): JSX.Element => {
    /** Controllers */
    const {useScreensHooks} = useControllers();
    const {useSectionClients} = useScreensHooks();
    const {
        startDate,
        sections,
        headings,
        handleChangeRange
    } = useSectionClients();

    /** Views */
    const {useComponents} = useViews();
    const {Table} = useComponents();

    return (
        <React.Fragment>
            <h1 className="mb-[30px] mt-[10px] shrink text-[33px] capitalize text-[#1b254b] font-bold">Clientes (Tabla)</h1>
            <div className="flex justify-between items-center mb-[30px]">
                <div className="max-w-[270px] w-full">
                    <label className="text-sm text-[#1b254b] ml-1.5 font-medium mb-[20px]">Rango de fechas</label>
                    <Datepicker
                        value={startDate}
                        onChange={handleChangeRange}
                        minDate={new Date('2010-01-01')}
                        maxDate={new Date('2020-12-31')}
                        startFrom={new Date('2010-01-01')}
                    />
                </div>
            </div>
            <div className="mb-[80px] mt-[20px]">
                <Table headings={headings} data={sections}/>
            </div>
        </React.Fragment>
    );
}

export default SectionClients;