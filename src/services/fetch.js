//create a function usefetch to fetch data from the api
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
        };
        fetchData();
    }, [url]);
    
    return { data, loading, error };
    }
