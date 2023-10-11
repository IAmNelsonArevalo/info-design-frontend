import React from "react";
import {Card, List, ListItem, ListItemPrefix, Typography} from "@material-tailwind/react";
import {UserCircleIcon} from "@heroicons/react/24/solid";

const Sidebar: React.FC = (): JSX.Element => {
    const validatePath = (path: string) => {
        return window.location.pathname === path;
    }

    const pushRoute = (path: string) => {
        window.location.href = path;
    }

    return (
        <Card className="h-screen w-full max-w-[400px] p-4 shadow-2xl shadow-blue-gray-900/5">
            <div className="mb-2 py-4">
                <div className="flex justify-center items-center">
                    <img className="h-[100px] w-[100px]" src="https://media.licdn.com/dms/image/C4E0BAQHwMb1uicZ5BA/company-logo_200_200/0/1558029154125?e=1704931200&v=beta&t=U-UBoczMLYDH1fJVPUEoph0mweLW6i8gSuU-tstpeuA" alt=""/>
                </div>
                <div className="mt-[20px]">
                    <Typography variant="h5" color="gray" className="text-base font-light px-[20px]">
                        Clientes
                    </Typography>
                </div>
                <List>
                    <ListItem
                        className={`${validatePath('/') ? 'bg-[#4f9cec] text-white' : 'bg-transparent text-[#1b254b]'} hover:${validatePath('/') ? 'bg-[#4f9cec]' : 'bg-transparent text-[#1b254b]'}`}
                        onClick={() => pushRoute('/')}
                    >
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        Tabla
                    </ListItem>
                    <ListItem
                        className={`${validatePath('/client-graphics') ? 'bg-[#4f9cec] text-white' : 'bg-transparent'} hover:${validatePath('/client-graphics') ? 'bg-[#4f9cec]' : 'bg-transparent'}`}
                        onClick={() => pushRoute('/client-graphics')}
                    >
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        Graficos
                    </ListItem>
                </List>
                <div className="mt-[20px]">
                    <Typography variant="h5" color="gray" className="text-base font-light px-[20px]">
                        Tramos
                    </Typography>
                </div>
                <List>
                    <ListItem
                        className={`${validatePath('/sections') ? 'bg-[#4f9cec] text-white' : 'bg-transparent text-[#1b254b]'} hover:${validatePath('/sections') ? 'bg-[#4f9cec]' : 'bg-transparent text-[#1b254b]'}`}
                        onClick={() => pushRoute('/sections')}
                    >
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        Tabla
                    </ListItem>
                    <ListItem
                        className={`${validatePath('/sections-graphics') ? 'bg-[#4f9cec] text-white' : 'bg-transparent'} hover:${validatePath('/sections-graphics') ? 'bg-[#4f9cec]' : 'bg-transparent'}`}
                        onClick={() => pushRoute('/sections-graphics')}
                    >
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        Graficos
                    </ListItem>
                </List>
                <div className="mt-[20px]">
                    <Typography variant="h5" color="gray" className="text-base font-light px-[20px]">
                        Tramos Por Cliente
                    </Typography>
                </div>
                <List>
                    <ListItem
                        className={`${validatePath('/section-clients') ? 'bg-[#4f9cec] text-white' : 'bg-transparent text-[#1b254b]'} hover:${validatePath('/section-clients') ? 'bg-[#4f9cec]' : 'bg-transparent text-[#1b254b]'}`}
                        onClick={() => pushRoute('/section-clients')}
                    >
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5"/>
                        </ListItemPrefix>
                        Tabla
                    </ListItem>
                </List>
            </div>
        </Card>
    );
}

export default Sidebar;