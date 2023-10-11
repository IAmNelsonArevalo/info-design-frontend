import React from "react";
import axios from "axios";

const useInterceptors = () => {
    React.useEffect(() => {
        console.log(import.meta.env.VITE_APP_API_URL)
        axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
        axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers['Content-Type'] = 'application/json';
        axios.defaults.headers['Accept'] = 'application/json';
    }, [])
}

export default useInterceptors;