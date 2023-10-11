import React from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import {Doughnut, Pie, Line} from 'react-chartjs-2';
import {Card, CardBody, Typography} from "@material-tailwind/react";
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, PointElement, LineElement} from "chart.js";
/** Local Modules */
import useControllers from "controllers";

const ClientGraphics: React.FC = (): JSX.Element => {
    /** Controllers */
    const {useScreensHooks} = useControllers();
    const {useClients} = useScreensHooks();
    const {startDate, handleChangeRange, clients} = useClients();

    const comercial_consumption = clients ? clients.map((item: any) => item.consumo_comercial) : [];
    const industrial_consumption = clients ? clients.map((item: any) => item.consumo_industrial) : [];
    const residential_consumption = clients ? clients.map((item: any) => item.consumo_residencial) : [];
    const comercial_cost = clients ? clients.map((item: any) => item.costo_comercial) : [];
    const industrial_cost = clients ? clients.map((item: any) => item.costo_industrial) : [];
    const residential_cost = clients ? clients.map((item: any) => item.costo_residencial) : [];
    const residential_lost = clients ? clients.map((item: any) => item.perdidas_residencial) : [];
    const comercial_lost = clients ? clients.map((item: any) => item.perdidas_residencial) : [];
    const industrial_lost = clients ? clients.map((item: any) => item.perdidas_residencial) : [];
    const lines = clients ? clients.map((item: any) => item.Linea) : [];

    ChartJS.register(ArcElement, Tooltip, Legend, Title, BarElement, LinearScale, CategoryScale, PointElement, LineElement);

    return (
        <React.Fragment>
            <h1 className="mb-[30px] mt-[10px] shrink text-[33px] capitalize text-[#1b254b] font-bold">Clientes
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
                                        text: 'Consumo Entre Industrias, Comercios y Residencias',
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
                                        label: 'Consumo Residencial',
                                        data: [...residential_consumption],
                                        borderColor: 'rgb(255, 99, 132)',
                                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                        yAxisID: 'y',
                                    },
                                    {
                                        label: 'Consumo Comercial',
                                        data: [...comercial_consumption],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                        yAxisID: 'y1',
                                    },
                                    {
                                        label: 'Consumo Industrial',
                                        data: [...industrial_consumption],
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
            <div className="grid grid-cols-3 gap-[20px] mb-[80px] max-874:grid-cols-2 max-597:grid-cols-1">
                <Card>
                    <CardBody>
                        <Typography as="h2" className="font-bold">
                            Costo Comercial
                        </Typography>
                        <Pie data={{
                            labels: lines,
                            datasets: [{
                                label: "Consumo Comercial",
                                data: comercial_cost,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            }]
                        }}></Pie>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Typography as="h2" className="font-bold">
                            Costo Industrial
                        </Typography>
                        <Pie data={{
                            labels: lines,
                            datasets: [{
                                label: "Consumo Comercial",
                                data: industrial_cost,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            }]
                        }}></Pie>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Typography as="h2" className="font-bold">
                            Costo Residencial
                        </Typography>
                        <Pie data={{
                            labels: lines,
                            datasets: [{
                                label: "Consumo Comercial",
                                data: residential_cost,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            }]
                        }}></Pie>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Typography as="h2" className="font-bold">
                            Perdida Comercial
                        </Typography>
                        <Doughnut data={{
                            labels: lines,
                            datasets: [{
                                label: "Consumo Comercial",
                                data: comercial_lost,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            }]
                        }}></Doughnut>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Typography as="h2" className="font-bold">
                            Perdida Residencial
                        </Typography>
                        <Doughnut data={{
                            labels: lines,
                            datasets: [{
                                label: "Consumo Comercial",
                                data: residential_lost,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            }]
                        }}></Doughnut>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Typography as="h2" className="font-bold">
                            Perdida Residencial
                        </Typography>
                        <Doughnut data={{
                            labels: lines,
                            datasets: [{
                                label: "Consumo Comercial",
                                data: industrial_lost,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)',
                                ],
                                borderWidth: 1,
                            }]
                        }}></Doughnut>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default ClientGraphics;