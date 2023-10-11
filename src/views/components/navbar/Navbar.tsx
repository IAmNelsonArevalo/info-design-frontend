import React from "react";
import {Drawer, IconButton, List, ListItem, ListItemPrefix, Navbar, Typography} from '@material-tailwind/react';
import {UserCircleIcon} from "@heroicons/react/24/solid";

const NavBar: React.FC = (): JSX.Element => {
    /** States */
    const [open, setOpen] = React.useState<boolean>(false);
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    const handleOpenDrawer = () => setOpen(true)

    const handleCloseDrawer = () => setOpen(false);

    const validatePath = (path: string) => {
        return window.location.pathname === path;
    }

    const pushRoute = (path: string) => {
        window.location.href = path;
    }

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
            if (window.innerWidth >= 1024) {
                setOpen(false)
            }
        })
    }, [])

    return (
        <React.Fragment>
            <Navbar
                className="mx-auto max-w-full rounded-[0%] shadow-none bg-[transparent] border-[transparent] backdrop-blur-none w-full py-2 px-4 lg:px-8 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Info Design Colombia
                    </Typography>
                    {
                        width <= 1023 && (
                            <svg
                                onClick={handleOpenDrawer}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        )
                    }
                </div>

            </Navbar>
            <Drawer open={open} onClose={handleCloseDrawer} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">

                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={handleCloseDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className="mb-2 py-4">
                    <div className="flex justify-center items-center">
                        <img className="h-[100px] w-[100px]"
                             src="https://media.licdn.com/dms/image/C4E0BAQHwMb1uicZ5BA/company-logo_200_200/0/1558029154125?e=1704931200&v=beta&t=U-UBoczMLYDH1fJVPUEoph0mweLW6i8gSuU-tstpeuA"
                             alt=""/>
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
            </Drawer>
        </React.Fragment>
    );
}

export default NavBar;