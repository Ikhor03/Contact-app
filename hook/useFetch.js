import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {},
        url: `https://dummyjson.com/users${endpoint}`,
        params : {...query}
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await axios.request(options);
            
            setData(res.data.users || res.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('there is something wrong');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);
    
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}
}