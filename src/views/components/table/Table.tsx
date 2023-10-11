import React, { useState } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { map } from 'lodash';

interface ITable {
    headings: any;
    data: any;
}

const Table: React.FC<ITable> = ({ headings, data }): JSX.Element => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({
        key: '',
        direction: 'asc',
    });

    const handleSort = (key: string) => {
        const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        setSortConfig({ key, direction });
    };

    const sortedData = [...data].sort((a, b) => {
        const index = Object.values(headings).findIndex((item: any) => item === sortConfig.key);
        const key = Object.keys(headings)[index];

        if (typeof a[key] === "string") {
            if(sortConfig.direction === 'asc') {
                return b[key].localeCompare(a[key])
            } else if(sortConfig.direction === 'desc') {
                return a[key].localeCompare(b[key]);
            } else {
                return a;
            }
        } else {
            if(sortConfig.direction === 'asc') {
                return b[key] - a[key];
            } else if(sortConfig.direction === 'desc') {
                return a[key] - b[key];
            } else {
                return a;
            }
        }
    });

    return (
        <Card className="h-auto w-full">
            <CardBody className="px-0 max-w-rest--30-px w-full overflow-x-auto py-0">
                <table className="overflow-x-scroll w-full table-auto text-left">
                    <thead>
                    <tr>
                        {map(Object.values(headings), (item: string, index: number) => (
                            <th
                                key={index}
                                onClick={() => handleSort(item)}
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 whitespace-nowrap cursor-pointer text-center"
                            >
                                {item}
                                {sortConfig.key === item && (
                                    <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                                )}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {sortedData.length === 0 ? (
                        <tr className="even:bg-blue-gray-50/50 h-[80px]">
                            <td colSpan={Object.values(headings).length}>
                                <Typography variant="small" color="blue-gray" className="font-normal px-[20px]">
                                    Oppps...!, no tenemos datos que mostrarte en este momento...
                                </Typography>
                            </td>
                        </tr>
                    ) : (
                        <React.Fragment>
                            {map(sortedData, (item: any, index: number) => (
                                <tr key={index} className="even:bg-blue-gray-50/50 h-[80px] text-center">
                                    {map(Object.keys(headings), (value: string, ind: number) => (
                                        <td key={ind}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {item[value]}
                                            </Typography>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </React.Fragment>
                    )}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
};

export default Table;