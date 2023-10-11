import React from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import {Line} from 'react-chartjs-2';
import {Card, CardBody} from "@material-tailwind/react";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
/** Local Modules */
import useControllers from "controllers";

const SectionsGraphics: React.FC = (): JSX.Element => {
    /** Controllers */
    const {useScreensHooks} = useControllers();
    const {useSections} = useScreensHooks();
    const {startDate, handleChangeRange, sections} = useSections();

    const lines = Array.isArray(sections) ? sections.map((item: any) => item.Linea) : [];
    const cost = Array.isArray(sections) ? sections.map((item: any) => item.costo) : [];
    const lost = Array.isArray(sections) ? sections.map((item: any) => item.perdidas) : [];
    const consumption = Array.isArray(sections) ? sections.map((item: any) => item.consumo) : [];

    ChartJS.register(ArcElement, Tooltip, Legend, Title, BarElement, LinearScale, CategoryScale, PointElement, LineElement);

    return (
        <React.Fragment>
            <h1 className="mb-[30px] mt-[10px] shrink text-[33px] capitalize text-[#1b254b] font-bold">Tramos
                (Graficos)</h1>
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
            <div className="my-[20px] flex justify-center">
                <Card className="w-full">
                    <CardBody>
                        <Line
                            style={{height: '500px !important'}}
                            options={{
                                responsive: true,
                                interaction: {
                                    mode: 'index' as const,
                                    intersect: false,
                                },
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Consumo, Perdidas y costos entre tramos',
                                    },
                                },
                                scales: {
                                    y: {
                                        type: 'linear' as const,
                                        display: true,
                                        position: 'left' as const,
                                    },
                                    y1: {
                                        type: 'linear' as const,
                                        display: true,
                                        position: 'right' as const,
                                        grid: {
                                            drawOnChartArea: false,
                                        },
                                    },
                                },
                            }}
                            data={{
                                labels: lines,
                                datasets: [
                                    {
                                        label: 'Costo',
                                        data: [...cost],
                                        borderColor: 'rgb(255, 99, 132)',
                                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                        yAxisID: 'y',
                                    },
                                    {
                                        label: 'Perdidas',
                                        data: [...lost],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                        yAxisID: 'y1',
                                    },
                                    {
                                        label: 'Consumo',
                                        data: [...consumption],
                                        borderColor: 'rgba(255, 206, 86, 1)',
                                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                                        yAxisID: 'y1',
                                    },
                                ],
                            }}
                        />
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default SectionsGraphics;