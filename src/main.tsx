import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@material-tailwind/react';
/** Local Modules */
import App from 'App';
/** Styles */
import 'styles/index.css';

const root: HTMLElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);