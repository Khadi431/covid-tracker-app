import { useState, useEffect} from "react";
function useStats(url) {
    const [stats, setStats] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(url)
            .then((res) => res.json())
            .catch((err) => setError(err));
            setStats(data);
            setLoading(false);
        }
         fetchData();
        }, [url]);
        return {
            stats,
            error,
            loading,
        };
    } 
  export default useStats;