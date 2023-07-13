const API_URL = "https://codeforces.com/api/problemset.problems";

export default function ProblemsetDataFetcher(props) {
    const [problemsetData, setProblemsetData] = useState([]);

    async function fetchProblemset(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setProblemsetData(data.result);
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchProblemset(API_URL);
    }, []);

    return <div></div>;
}